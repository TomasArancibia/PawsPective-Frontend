const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
      listOfPost: [],
      post: {
        description: "",
        likecount: "",
        source_url: "",
        date: "",
        location: "",
        feed_id: ""
      },
      token: null,  // acá se almacena el token?
    },
    actions: {
      loadUsers: async () => {
        try {
          const token = getStore().token;
          const response = await fetch("http://127.0.0.1:3000/users", {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });
          const userData = await response.json();
          setStore({ users: userData });
        } catch (error) {
          console.error("An error occurred while loading users:", error);
        }
      },

 /*     getUser: async () => {
        try {
          const response = await fetch(`http://127.0.0.1:3000/users/${'userId'}`, {
            headers: {
              "Authorization": `Bearer ${store.token}`
            }
          });
          const userData = await response.json();
          if (response.ok) {
          setFormData(data);
        } else {
          console.error("Error getting user data:", data.error);
        }
      } catch (error) {
        console.error("Error getting user data", error);
      }
    }, */
      createUser: async (userData) => {
        try {
          const response = await fetch("http://127.0.0.1:3000/users/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            getActions().loginUser(userData['email'], userData['password']);
          }
        } catch (error) {
          console.error("An error occurred while creating user:", error);
        }
      },

      editUser: async (userId, userData) => {
        try {
          const token = getStore().token;
          const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(userData),
          });

          if (response.ok) {
            getActions().loadUsers();
          }
        } catch (error) {
          console.error("An error occurred while updating user:", error);
        }
      },

      eraseUser: async (userId) => {
        try {
          const token = getStore().token;
          const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
            method: "DELETE",
            headers: {
              "Authorization": `Bearer ${token}`
            }
          });

          if (response.ok) {
            getActions().loadUsers();
          } else {
            console.error("Failed to delete user. Server response not OK.");
          }
        } catch (error) {
          console.error("An error occurred while deleting user:", error);
        }
      },

      loginUser: async (email, password) => {
        try {
          const response = await fetch("http://127.0.0.1:3000/users/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
          });

          if (response.ok) {
            const loginData = await response.json();
            setStore({ token: loginData.access_token });
            localStorage.setItem('token', loginData.access_token);
            localStorage.setItem('token', loginData.access_token);// Almacena el token en el almacenamiento local
            getActions().loadUsers();
            console.log("Login successful:", loginData); 
          } else {
            console.error("Login failed. Server response not OK.");
          }
        } catch (error) {
          console.error("An error occurred while logging in:", error);
        }
      },

      logoutUser: () => {
        setStore({ token: null });
        localStorage.removeItem('token');  // Elimina el token del almacenamiento local
        console.log("Logout successful");
      },

      createPost: async (postData) => {
        try {
          const token = getStore().token;
          const response = await fetch("http://127.0.0.1:3000/feed/new_post", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`
            },
            body: postData
          });

          if (response.ok) {
            const result = await response.json();
            console.log('Post created successfully!');
            getActions().loadFeed();
          } else {
            console.log('Error creating post.');
          }
        } catch (error) {
          console.error("An error occurred while creating post:", error);
        }
      },

      loadFeed: async () => {
        try {
          const response = await fetch("http://127.0.0.1:3000/feed");
          const postData = await response.json();
          setStore({ listOfPosts: postData });
        } catch (error) {
          console.error("An error occurred while loading Feed:", error);
        }
      },
    },
  };
};

export default getState;

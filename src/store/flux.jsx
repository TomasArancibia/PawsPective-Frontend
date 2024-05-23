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
    },
    actions: {
      loadUsers: async () => {
        try {
          const response = await fetch("http://127.0.0.1:3000/users");
          const userData = await response.json();
          setStore({ users: userData });
        } catch (error) {
          console.error("An error occurred while loading users:", error);
        }
      },
      createUser: async (userData) => {
        try {
          const response = await fetch(
            `http://127.0.0.1:3000/users/register`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );

          if (response.ok) {
            getActions().loadUsers();
          }
        } catch (error) {
          console.error("An error occurred while updating user:", error);
        }
      },
      editUser: async (userId, userData) => {
        try {
          const response = await fetch(
            `http://127.0.0.1:3000/users/${userId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            }
          );

          if (response.ok) {
            getActions().loadUsers();
          }
        } catch (error) {
          console.error("An error occurred while updating user:", error);
        }
      },
      eraseUser: async (userId) => {
        try {
          const response = await fetch(
            `http://127.0.0.1:3000/users/${userId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            getActions().loadUsers();
          } else {
            console.error("Failed to delete user. Server response not OK.");
          }
        } catch (error) {
          console.error("An error occurred while deleting user:", error);
        }
      },
      createPost: async (postData) => {
        try {
          const response = await fetch(
            `http://127.0.0.1:3000/feed/new_post`,
            {
              method: "POST",
              body: postData
            }
          );
          {/*alert(response)*/}
          if (response.ok) {
            const result = await response.json();
            console.log('Post created successfully!');
            getActions().loadFeed();
          } else {
            console.log('Error creating post.');
          }
        } catch(error) {
        console.error("An error occurred while creating post:", error);
      }
    },
    loadFeed: async () => {
      try {
        {/*esto es un get de post solo eso en teoria esta listo el front, igual falta modificar, y pasar url de cloudinary en este*/}
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


export default getState
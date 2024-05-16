const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      users: [],
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
    },
  };
};
export default getState;

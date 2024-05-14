const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      post: {
        description: "",
        likecount: "",
        source_url: "",
        date: "",
        location: "",
        feed_id: ""
      },
      listOfPost: [],
    },
    actions: {
      handleChange: (e) => {
        const { name, value } = e.target;
        setStore({
          post: {
            ...getStore().post,
            [name]: value,
          },
        });
      },
      handleSubmit: async (e) => {
        e.preventDefault();
        try {
          const store = getStore();
          console.log("Store:", store);

          const { description, likecount, source_url, date, location, user_id, feed_id } = store.contact;

          console.log("Description:", description);
          console.log("LikeCount:", likecount);
          console.log("SourceUrl:", source_url);
          console.log("Date:", date);
          console.log("Location:", location);
          console.log("FeedID:", feed_id)
          //"Poner nuestra API rest en vez de la de contact"
          const response = await fetch(
            "https://playground.4geeks.com/apis/fake/contact",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                description,
                likecount,
                source_url,
                date,
                location,
                feed_id,
                user_slug: "UserPostsList",
               
              }),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to create new Post");
          }
          getActions().FetchPosts("UserPostsList"); 
        } catch (error) {
          console.error("Error creating post:", error);
        }
      },


      FetchUsersPosts: async () => {
        try {
          const response = await fetch(
             //"Poner nuestra API rest en vez de la de contact"
            "https://playground.4geeks.com/apis/fake/contact/agenda"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch UsersPosts");
          }
          const data = await response.json();
          setStore({ usersPosts: data });  // Update store with fetched userPosts
        } catch (error) {
          console.error("Error fetching UsersPosts:", error);
        }
      },

      FetchPosts: async () => {
        try {
          const response = await fetch(
             //"Poner nuestra API rest en vez de la de contact"
            "https://playground.4geeks.com/apis/fake/contact/agenda/myContactList"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          const data = await response.json();
          setStore({ listOfPost: data }); // Actualiza el store con los nuevos posts obtenidos
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      },

      putFetchPost: async (post_id) => {
        const store = getStore();
        try {
          const response = await fetch(
             //"Poner nuestra API rest en vez de la de contact"
            `https://playground.4geeks.com/apis/fake/contact/${post_id}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(store.post),
            }
          );
          if (!response.ok) {
            throw new Error("Failed to update post");
          }
          actions.FetchPosts();  // Trae la lista actualizada de posts después de actualziar un post
        } catch (error) {
          console.error("Error updating post:", error);
        }
      },

      deleteFetchPost: async (post_id) => {
        try {
          const response = await fetch(
            `https://playground.4geeks.com/apis/fake/contact/${post_id}`,
            {
              method: "DELETE",
            }
          );
          if (!response.ok) {
            throw new Error("Failed to delete post");
          }
          actions.FetchPosts(); // Trae la lista de posts luego de borrar un post
        } catch (error) {
          console.error("Error deleting post:", error);
        }
      },
    },
  };
};


export default getState;
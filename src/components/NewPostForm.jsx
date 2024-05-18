import React, { useContext } from "react";
import { Context } from "../store/appContext";


const NewPostForm = () => {
    const { store, actions } = useContext(Context);
  
    const handleSubmit = async (e) => {
     
        e.preventDefault();
        
      if (store.post.id) {
        actions.putFetchPost(store.post.id);
      } else {
       await actions.handleSubmit(e);
      }
    };
  
    return (
      <>
        <form className="p-3" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter Description for the post"
              name="description"
              value={store.post.description}
              onChange={actions.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Source_Url" className="form-label">
              Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="Source_Url"
              name="Source_Url"
              // value={store.post.Source_Url}
              // onChange={actions.handleChangeFile}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phomeNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              placeholder="Enter phone number"
              name="phone"
              value={store.post.phone}
              onChange={actions.handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="faddress"
              placeholder="Enter your address"
              name="address"
              value={store.post.address}
              onChange={actions.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            {store.post.id ? "Update" : "Submit"}
          </button>
        </form>
      </>
    );
  };
  
  export default NewPostForm;
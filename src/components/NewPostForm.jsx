import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Location from "./Location";
import { useNavigate, NavLink } from "react-router-dom";

const NewPostForm = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null)
  const navegate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  var fileData = new FormData();

  const handleCreate = (e) => {
    e.preventDefault()
    fileData.append("post_data", JSON.stringify(formData))
    fileData.append('source_url', file);
    actions.createPost(fileData);
    setFormData({})
    setFile(null)
    navegate('/feed')
  };

  return (
    <>
      <form className="p-3" onSubmit={(e) => {
        console.log("Save button clicked");
        handleCreate(e);
      }}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter Description for the post"
            name="description"
            value={formData.description}
            onChange={(e) => {
              setFormData({ ...formData, description: e.target.value });
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Source_Url" className="form-label">
            Upload Photo
          </label>
          <input
            type="file"
            className="form-control"
            id="Source_Url"
            name="Source_Url"
            onChange={handleFileChange}
          />
        </div>
        {/* <Location/> */}
        <div className='col-md-2 newpostbtns'>
          <button type="submit" className="btn me-5 ms-0 newcard">
            {store.post.id ? "Update" : "Submit"}
          </button>
          <NavLink className="btn btn-lg newcard ms-4" to="/feed">
            Return to feed</NavLink>
        </div>

      </form>
    </>
  );
};

export default NewPostForm;
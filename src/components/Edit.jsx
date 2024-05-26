import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../assets/user-icon.png";
import animalsPhoto from "../assets/AnimalsPhoto.png";

const Edit = ({ userId }) => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({ 
    id: "",
    username: "",
    email: "",
    name: "",
    lastname: "",
    age: "",
    password: ""
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/users/${userId}`, {
          headers: {
            "Authorization": `Bearer ${store.token}`
          }
        });
        const data = await response.json();
        if (response.ok) {
          setFormData(data);
        } else {
          console.error("Error fethcing user data:", data.error);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
    }
  };
  
  fetchUser();
}, [userId, store.token]);

  const handleEdit = () => {
    console.log("Editing user:", formData);
    actions.editUser(formData.id, formData);
  };

  const handleDelete = () => {
    console.log("Deleting user:", formData.id);
    actions.eraseUser(formData.id);
  };

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center">
        <img className="rounded-circle" src={userIcon} alt="User Avatar" />
      </div>
      <form className="container-fluid" onSubmit={handleEdit}>
        <input
          className="form-control m-2"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          className="form-control m-2"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <div className="d-inline-flex space-evenly m-1">
          <input
            className="form-control m-1"
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            className="form-control m-1"
            type="text"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          />
        </div>
        <div className="m-1">
          <select
            className="form-select"
            size="1"
            aria-label="Select Age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          >
            <option disabled>Age</option>
            {Array.from({ length: 99 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className="container-fluid d-flex justify-content-center p-1">
          <button type="submit" className="btn m-1 text-light">
            <FontAwesomeIcon icon={faUserCheck} /> Save Changes
          </button>
        </div>
      </form>
      <div className="border-top border-5 p-1">
      <div className="container-fluid d-flex justify-content-center">
        <button type="button" className="btn m-1 text-light" onClick={handleDelete}>
          <FontAwesomeIcon icon={faUserSlash} /> Delete User
        </button>
        </div>
      </div>
    </div>
  );
};

export default Edit;

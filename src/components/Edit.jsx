import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../assets/user-icon.png";
const Edit = ({ user }) => {

  const { store, actions } = useContext(Context);

  const [formData, setFormData] = useState({ ...user });

  const handleEdit = () => {
    console.log("Editing user:", formData);
    actions.editUser(user.id, formData);
  };

  const handleDelete = () => {
    console.log("Deleting user:", user.id);
    actions.eraseUser(user.id);
  };

  return (
    <div>
      <div className="p-1">
        <img className="rounded-circle" src={userIcon} alt="User Avatar" />
      </div>
      <div className="container-fluid">
        <input
          className="form-control m-2"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {
            console.log("Email changed:", e.target.value);
            setFormData({ ...formData, email: e.target.value });
          }}
        />
        <input
          className="form-control m-2"
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => {
            console.log("Username changed:", e.target.value);
            setFormData({ ...formData, username: e.target.value });
          }}
        />
        <input
          className="form-control m-2"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => {
            console.log("Password changed:", e.target.value);
            setFormData({ ...formData, password: e.target.value });
          }}
        />
      </div>
      <div className="d-inline-flex space-evenly m-1">
        <input
          className="form-control m-1"
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => {
            console.log("Name changed:", e.target.value);
            setFormData({ ...formData, name: e.target.value });
          }}
        />
        <input
          className="form-control m-1"
          type="text"
          placeholder="Last Name"
          value={formData.lastname}
          onChange={(e) => {
            console.log("Last name changed:", e.target.value);
            setFormData({ ...formData, lastname: e.target.value });
          }}
        />
      </div>
      <div className="m-1">
        <select
          className="form-select"
          size="1"
          aria-label="Select Age"
          value={formData.age}
          onChange={(e) => {
            console.log("Age changed:", e.target.value);
            setFormData({ ...formData, age: e.target.value });
          }}
        >
          <option disabled selected>Age</option>
          {Array.from({ length: 99 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-1 mb-3">
        <button
          type="button"
          className="btn m-1 text-light"
          onClick={() => {
            console.log("Save button clicked");
            handleEdit();
          }}
        >
          <FontAwesomeIcon icon={faUserCheck} /> Save Changes
        </button>
      </div>
      <div className="border-top border-5 p-3">
        <button
          type="button"
          className="btn m-1 text-light"
          onClick={() => {
            console.log("Delete button clicked");
            handleDelete();
          }}
        >
          <FontAwesomeIcon icon={faUserSlash} /> Delete User
        </button>
      </div>
    </div>
  );
};

export default Edit;

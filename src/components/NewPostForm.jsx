import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Location from "./Location";
import { useNavigate, NavLink } from "react-router-dom";

const NewPostForm = () => {
  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({});
  const [file, setFile] = useState(null);
  const [showLocationPopup, setShowLocationPopup] = useState(false);
  const [locationName, setLocationName] = useState(""); // Estado para almacenar el nombre de la dirección
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleLocationSelect = (selectedLocation) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      location: selectedLocation
    }));

    // Obtener el nombre de la dirección basado en la ubicación seleccionada
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${selectedLocation.lat}&lon=${selectedLocation.lng}`)
      .then(response => response.json())
      .then(data => {
        const { road, suburb, city, state, country } = data.address;
        const filteredAddress = [road, suburb, city, state, country].filter(part => part).join(', ');
        setLocationName(filteredAddress);
      });

    setShowLocationPopup(false);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append("post_data", JSON.stringify(formData));
    fileData.append('source_url', file);
    actions.createPost(fileData);
    setFormData({});
    setFile(null);
    navigate('/feed');
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
            value={formData.description || ""}
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
        <div className="mb-3">
          <button type="button" className=" form-control btnpaw" onClick={() => setShowLocationPopup(true)}>
            Seleccionar Localización
          </button>
        </div>
        {locationName && (
          <div className="mb-3">
            <p>Localización seleccionada: {locationName}</p>
          </div>
        )}
        <div className='col-md-2 newpostbtns'>
          <button type="submit" className="btn btnpaw me-5 ms-0 newcard">
            {store.post.id ? "Update" : "Submit"}
          </button>
          <NavLink className="btnpaw btn btn-lg newcard ms-4" to="/feed">
            Return to feed
          </NavLink>
        </div>
      </form>
      <Location
        onLocationSelect={handleLocationSelect}
        showPopup={showLocationPopup}
        onClose={() => setShowLocationPopup(false)}
      />
    </>
  );
};

export default NewPostForm;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSlash } from "@fortawesome/free-solid-svg-icons";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
import userIcon from "../assets/user-icon.png"; // Replace with your placeholder image
const Edit = () => {
  return (
    <div>
      <div className="p-1">
        <img className="rounded-circle" src={userIcon} alt="placeholder.png" />
      </div>
      <div className="container-fluid">
        <input className="form-control m-2" type="email" placeholder="email" />
        <input
          className="form-control m-2"
          type="text"
          placeholder="username"
        />
        <input
          className="form-control m-2"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="d-inline-flex space-evenly m-1">
        <input className="form-control m-1" type="text" placeholder="Name" />
        <input
          className="form-control m-1"
          type="text"
          placeholder="Last Name"
        />
      </div>
      <div className="m-1">
        <select className="form-select" size="1" aria-label="select age">
          <option selected>Age</option>
          {Array.from({ length: 99 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          )).map((option, index) => option)}
        </select>
      </div>
      <div className="mt-1 mb-3">
      <button type="button" className="btn m-1 text-light">
          <FontAwesomeIcon icon={faUserCheck} /> Save Changes
        </button>
      </div>
      <div className="border-top border-5 p-3">
      <button type="button" className="btn m-1 text-light">
          <FontAwesomeIcon icon={faUserSlash} /> Delete User
        </button>
      </div>
    </div>
  );
};

export default Edit;

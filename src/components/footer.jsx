import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHouseChimney, faBasketShopping, faPhotoFilm, faUser, faUserGear} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../App.css"

const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom d-inline-flex p-2 ">
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faUserPlus} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/feed">
          <FontAwesomeIcon icon={faPhotoFilm} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/login">
          <FontAwesomeIcon icon={faHouseChimney} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faBasketShopping} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/edit_account">
          <FontAwesomeIcon icon={faUserGear} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/edit_account/5">
          <FontAwesomeIcon icon={faUser} className="navIcon" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Footer;


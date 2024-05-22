import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDog,
  faHouseChimney,
  faMagnifyingGlassLocation,
  faBasketShopping,
  faWheelchair,
  faUser,
  faUserPen,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom d-inline-flex p-2 ">
        <NavLink className="circle-element mb-0 text-light">
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            className="navIcon"
          />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light">
          <FontAwesomeIcon icon={faDog} className="navIcon" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Footer;

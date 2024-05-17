import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faHouseChimney, faMagnifyingGlassLocation, faBasketShopping, faWheelchair, faUser, faUserPen} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../App.css"



const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom d-inline-flex p-2 ">
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faDog} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faHouseChimney} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/sign_up">
          <FontAwesomeIcon icon={faBasketShopping} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/edit_account">
          <FontAwesomeIcon icon={faUserPen} className="navIcon" />
        </NavLink>
        <NavLink className="circle-element mb-0 text-light" to="/">
          <FontAwesomeIcon icon={faUser} className="navIcon" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Footer;


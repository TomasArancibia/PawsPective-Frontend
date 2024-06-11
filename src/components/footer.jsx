import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faHouseChimney, faBasketShopping, faPhotoFilm, faUser, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import "../App.css";

const navItems = [
  { to: "/feed", icon: faPhotoFilm },
  { to: "/", icon: faHouseChimney },
  { to: "/edit_account/", icon: faUser },
];

const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom d-inline-flex p-2">
        {navItems.map((item, index) => (
          <NavLink key={index} className="circle-element mb-0 text-light" to={item.to}>
            <FontAwesomeIcon icon={item.icon} className="navIcon" />
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Footer;


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";



const Footer = () => {
  return (
    <div>
      <nav className="navbar fixed-bottom">
        <div className="container-fluid text-light">
          <FontAwesomeIcon icon={faDog} /> Pawspective{" "}
          <FontAwesomeIcon icon={faDog} flip="horizontal" />
        </div>
      </nav>
    </div>
  );
};

export default Footer;


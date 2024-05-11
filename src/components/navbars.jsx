import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";



const Navbars = () => {
  return (
    <div>
      <nav className="navbar fixed-top">
        <div className="container-fluid text-light">
          <FontAwesomeIcon icon={faDog} /> Pawspective{" "}
          <FontAwesomeIcon icon={faDog} flip="horizontal" />
        </div>
      </nav>
    </div>
  );
};

export default Navbars;


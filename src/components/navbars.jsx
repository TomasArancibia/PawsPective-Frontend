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
      <div className="container-fluid">
        <input className="form-control" type="email" placeholder="email" />
        <input className="form-control" type="text" placeholder="username" />
        <input
          className="form-control"
          type="password"
          placeholder="password"
        />
      </div>
      <div className="container-fluid">
        <input className="form-control" type="text" placeholder="Name" />
        <input className="form-control" type="text" placeholder="Last Name" />
      </div>
      <footer className="navbar fixed-bottom">
        <div className="container-fluid text-light">
          <FontAwesomeIcon icon={faDog} />
        </div>
      </footer>
    </div>
  );
};

export default Navbars;

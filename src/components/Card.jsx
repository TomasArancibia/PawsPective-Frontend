import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faComment,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import placeHolderImage from "../assets/Placeholder.png";

const Card = () => {
  return (
    <div>
      <div className="card p-1 m-1" style={{ width: "18rem" }}>
        <div className="container-fluid p-1">
          <img
            src={placeHolderImage}
            className="card-img-top"
            alt="Placeholder"
          />
        </div>
        <div className="d-inline-flex justify-content-end space-evenly text-light p-1 m-1">
          <div className="p-1">
            <FontAwesomeIcon icon={faPaw} />
          </div>
          <div className="p-1">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="p-1">
            <FontAwesomeIcon icon={faPaperPlane} />
          </div>
        </div>
        <div className="card-body border p-1 m-1 rounded">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

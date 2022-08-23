import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faVideo,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Blocco = () => {
  return (
    <div className="blocco">
      <div className="row">
        <div>
          <p>
            Name <br />
            IP <br />
            Status <br />
          </p>
        </div>
        <div>
          <a href="edit">
            <FontAwesomeIcon icon={faPenToSquare} className="penToSquare" />
          </a>
        </div>
      </div>
      <div className="row">
        <div>
          <FontAwesomeIcon icon={faVideo} className="videocamera" />
        </div>
        <div>
          <a href="details">
            <FontAwesomeIcon icon={faPlus} className="plus" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blocco;

import PropTypes from "prop-types";

import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faVideo,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Blocco = ({ board }) => {
  return (
    <div className="blocco">
      <div className="row">
        <div>
          <div className="text">Name: {board.name} </div>
          <div className="text">IP: {board.ipAddress}</div>
          <div className="text">Status </div>
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
          <a href={`details/${board.slug}`}>
            <FontAwesomeIcon icon={faPlus} className="plus" />
          </a>
        </div>
      </div>
    </div>
  );
};

Blocco.propTypes = {
  board: PropTypes.object,
};

export default Blocco;

import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPenToSquare,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";

const Details = ({ boardSlug }) => {
  //faccio cose per recuperare i dati della scheda
  const [board, setBoard] = useState(null);
  useEffect(() => {
    const query = `
        {
            boardBlockCollection(where: { slug: "${boardSlug}"}, limit: 1){
                items{
                name
                ipAddress
                v0Name
                v1Name
                v2Name
                v3Name
                v4Name
                v5Name
                v6Name
                v7Name
                i0Name
                i1Name
                t1Name
                t2Name
                t3Name
                t4Name
                ext1Name
                ext2Name
                }
            }
        }
        `;

    window
      .fetch(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        }
      )
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        setBoard(data.boardBlockCollection.items[0]);
      });
  }, [boardSlug]);

  return (
    <div>
      <h2>
        Dettagli
        <FontAwesomeIcon icon={faChevronDown} className="arrow" />
      </h2>
      <div className="card">
        <div className="rowCard">
          <div className="cardTitle">
            {/* Nome della scheda preso dal server, altrimenti "caricamento" */}
            {board ? board.name : "Caricamento"}
            <FontAwesomeIcon icon={faCircle} className="statusCircle" />
          </div>
          <div>
            <a href="edit">
              <FontAwesomeIcon icon={faPenToSquare} className="editPen" />
            </a>
          </div>
        </div>
        <div className="rowCard">
          <div className="cardInfo">
            {board && (
              <>
                <div>IP: {board.ipAddress}</div>
                <br />
                {board.v0Name && <div>{board.v0Name} [v0]: </div>}
                {board.v1Name && <div>{board.v1Name} [v1]: </div>}
                {board.v2Name && <div>{board.v2Name} [v2]: </div>}
                {board.v3Name && <div>{board.v3Name} [v3]: </div>}
                {board.v4Name && <div>{board.v4Name} [v4]: </div>}
                {board.v5Name && <div>{board.v5Name} [v5]: </div>}
                {board.v6Name && <div>{board.v6Name} [v6]: </div>}
                {board.v7Name && <div>{board.v7Name} [v7]: </div>}
                <br />
                {board.i0Name && <div>{board.i0Name} [i0]: </div>}
                {board.i1Name && <div>{board.i1Name} [i1]: </div>}
                <br />
                {board.t1Name && <div>{board.t1Name} [t1]: </div>}
                {board.t2Name && <div>{board.t2Name} [t2]: </div>}
                {board.t3Name && <div>{board.t3Name} [t3]: </div>}
                {board.t4Name && <div>{board.t4Name} [t4]: </div>}
                <br />
                {board.ext1Name && <div>{board.ext1Name} [ext1]: </div>}
                {board.ext2Name && <div>{board.ext2Name} [ext2]: </div>}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

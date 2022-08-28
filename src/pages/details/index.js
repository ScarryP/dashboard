import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import { Connector } from "mqtt-react-hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faPenToSquare,
  faCircle,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import BoardInfo from "../../components/board-info";

const Details = ({ userMQTT }) => {
  let { boardSlug } = useParams();
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
                v0Min
                v0Max
                v1Name
                v1Min
                v1Max
                v2Name
                v2Min
                v2Max
                v3Name
                v3Min
                v3Max
                v4Name
                v4Min
                v4Max
                v5Name
                v5Min
                v5Max
                v6Name
                v6Min
                v6Max
                v7Name
                v7Min
                v7Max
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
    <Connector
      brokerUrl={userMQTT.server}
      options={{
        clientId: "dashboard",
        username: userMQTT.user,
        password: userMQTT.pwd,
      }}
    >
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
              <a href="/edit">
                <FontAwesomeIcon icon={faPenToSquare} className="editPen" />
              </a>
            </div>
          </div>
            <div className="cardInfo">
              {board && <BoardInfo board={board} boardSlug={boardSlug} />}
              <a href="/dashboard">
                <FontAwesomeIcon icon={faChevronLeft} className="backArrow" />
              </a>
          </div>
        </div>
      </div>
    </Connector>
  );
};

export default Details;

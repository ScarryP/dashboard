import { useState, useEffect } from "react";

import { Connector } from "mqtt-react-hooks";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateRight, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import "./style.css";
import Blocco from "../../components/blocco";

const query = `
{
    dashboardCollection{
      items{
        boardsCollection{
          items{
            slug
            name
            ipAddress
          }
        }
      }
    }
  }
`;

const Dashboard = () => {
  //faccio cose per recuperare i dati delle varie schede e metterli in un array 'boards'
  const [boards, setBoards] = useState(null);
  useEffect(() => {
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
        setBoards(data.dashboardCollection.items[0].boardsCollection.items);
      });
  }, []);

  return (
    <Connector
      brokerUrl="ws://localhost:9001"
      options={{ clientId: "dashboard" }}
    >
      <div>
        <h1>
          Telecamere
          <FontAwesomeIcon icon={faCirclePlay} className="play" />
        </h1>

        {/* Controllo se ho già recuperato i dati */}
        {boards ? (
          <div className="table">
            {/* per ogni scheda dell'array disegno un Blocco */}
            {boards.map((board) => (
              <div className="tableCell" key={board.slug}>
                <Blocco board={board} />
              </div>
            ))}
          </div>
        ) : (
          // Se non ho dati scrivo che li sto caricando
          <h2>Caricamento in corso ...</h2>
        )}
      </div>
    </Connector>
  );
};

export default Dashboard;

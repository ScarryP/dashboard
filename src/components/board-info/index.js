import { useState, useEffect } from "react";

import { useSubscription } from "mqtt-react-hooks";

import "./style.css";

const fields = [
  "v0",
  "v1",
  "v2",
  "v3",
  "v4",
  "v5",
  "v6",
  "v7",
  "i0",
  "i1",
  "t1",
  "t2",
  "t3",
  "t4",
  "ext1",
  "ext2",
];

const BoardInfo = ({ board, boardSlug }) => {
  let { message } = useSubscription(
    fields.map((field) => `${boardSlug}/${field}`)
  );

  const [messages, setMessages] = useState(
    fields.map((field) => {
      return {
        topic: `${boardSlug}/${field}`,
        message: null,
      };
    })
  );

  useEffect(() => {
    if (message) {
      setMessages((prevMessages) => {
        const newMessages = prevMessages.map((data) => {
          if (data.topic === message.topic) return message;
          else return data;
        });
        return newMessages;
      });
    }
  }, [message]);

  return (
    <>
      <div>IP: {board.ipAddress}</div>
      <br />

      {fields.map((field) => (
        <div key={field}>
          {board[`${field}Name`] && (
            <div>
              {/* Nome parametro */}
              {board[`${field}Name`]} [{field}]{" : "}
              {/* Valore attuale */}
              {messages.map(
                (message) =>
                  message &&
                  message.topic === `${boardSlug}/${field}` &&
                  (message.message || " ...")
              )}
              {/* Unità di misura */}
              {field.charAt(0) === "v" && "  V"}
              {field.charAt(0) === "i" && "  A"}
              {field.charAt(0) === "t" && "  °C"}
              {/* Validazione */}
              {message &&
                (board[`${field}Min`] || board[`${field}Max`]) &&
                ((parseFloat(message.message) > board[`${field}Max`] &&
                  board[`${field}Max`]) ||
                (parseFloat(message.message) < board[`${field}Min`] &&
                  board[`${field}Min`]) ? (
                  // messaggio di errore
                  <div className="errore">Errore </div>
                ) : (
                  // messaggio di tutto bene
                  <div className="tutto-bene">Tutto bene </div>
                ))}
            </div>
          )}
          {["v7", "i1", "t4"].includes(field) && <br />}
        </div>
      ))}
    </>
  );
};

export default BoardInfo;

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./style.css";

const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    logged: false,
    server: "",
    user: "",
    pwd: "",
  });
  useEffect(() => {
    const query = `
          {
            loginCollection{
                items {
                  defaultServer
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
        setLoginData((loginData) => ({
          ...loginData,
          server: data.loginCollection.items[0].defaultServer,
        }));
      });
  }, [setLoginData]);

  const handleLogin = (event) => {
    event.preventDefault();
    setLoginData((loginData) => ({
      ...loginData,
      logged: true,
    }));
    console.log(loginData);
    localStorage.setItem("user", JSON.stringify(loginData));
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>
        Login
        <FontAwesomeIcon icon={faRightToBracket} className="rightToBracket" />
      </h2>
      <div className="loginCard">
        <form onSubmit={handleLogin}>
          <div className="inputDiv">
            <div className="label">Server Address</div>
            <input
              type="text"
              placeholder="address"
              className="input"
              value={loginData.server}
              onChange={(e) =>
                setLoginData({ ...loginData, server: e.target.value })
              }
            />
          </div>
          <div className="inputDiv">
            <div className="label">
              <label type="text">Username</label>
            </div>
            <input
              type="text"
              placeholder="username"
              className="input"
              value={loginData.user}
              onChange={(e) =>
                setLoginData({ ...loginData, user: e.target.value })
              }
            />
          </div>
          <div className="inputDiv">
            <div className="label">Password</div>

            <input
              type="password"
              placeholder="password"
              className="input"
              value={loginData.pwd}
              onChange={(e) =>
                setLoginData({ ...loginData, pwd: e.target.value })
              }
            />
          </div>
          <div className="divButton">
            <input type="submit" className="joinButton" value="Login" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

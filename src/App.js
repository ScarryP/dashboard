import "./FixImport";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Edit from "./pages/edit";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    setUser(JSON.parse(loggedInUser));
    if (loggedInUser) {
      setIsLogged(true);
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        {isLogged && (
          <>
            <Route path="/edit" element={<Edit />} />
            <Route path="dashboard" element={<Dashboard userMQTT={user} />} />
            <Route
              path="details/:boardSlug/"
              element={<Details userMQTT={user} />}
            />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

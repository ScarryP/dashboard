import { Router } from "@reach/router";

import Login from "./pages/login";
import Edit from "./pages/edit";
import Details from "./pages/details";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Router>
      <Login path="/" />
      <Edit path="/edit" />
      <Dashboard path="/dashboard" />
      <Details path="/details/:boardSlug" />
    </Router>
  );
}

export default App;

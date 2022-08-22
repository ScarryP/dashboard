import { Router } from '@reach/router';

import logo from './logo.svg';
import './App.css';

import Login from './pages/login';
import Edit from './pages/edit';
import Details from './pages/details';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Login path="/" />
      <Edit path="/edit" />
      <Dashboard path="/dashboard" />
      <Details path="/details" />
    </Router>
  );
}

export default App;

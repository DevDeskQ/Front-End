import React from 'react';
import { withRouter } from 'react-router-dom'
import AppRouting from "./Routes/AppRouting";
import Nav from "./Components/NavBar/Nav";
import { getToken } from "./Utils/Axios";
import './App.css';

function App() {

    const signedIn = getToken();

  return (
    <div className="App">
        {signedIn && <Nav />}
        <AppRouting />
    </div>
  );
}

export default withRouter(App);

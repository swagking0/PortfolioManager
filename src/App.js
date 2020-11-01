import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./Routes";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Notification from "./Components/Notification/Notification";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Notification />
          <Routes />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;

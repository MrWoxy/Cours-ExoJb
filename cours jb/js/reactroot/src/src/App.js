import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
        </ul>

        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />

      </Router>
    )
  }
}

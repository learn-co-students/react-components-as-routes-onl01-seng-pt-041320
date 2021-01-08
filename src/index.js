import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from "./home"
import Navbar from "./navbar"
import About from "./about"
import Login from "./login"
import SignUp from "./signup"


ReactDOM.render((
  <Router>
    <>
    <Navbar />
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={SignUp} />
    </>
  </Router>),
  document.getElementById('root')
);
 
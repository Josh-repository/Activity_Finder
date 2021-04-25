import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./layout/home";
import Chat from "./views/chatbot/chatbot.view.js";
import Movies from "./views/movies.view.js"
import "./views/chatbot/css/chat.style.css"
class App extends React.Component {
  render() {
    return (
    <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path="/home" component={Dashboard} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/home/chatbot" component={Chat} />
          <Route path="/home/movies" component={Chat} />
          {/* <Route path="/home/restaurants" component={Chat} />
          <Route path="/home/Places" component={Chat} />
          <Route path="/home/recommendation" component={Chat} /> */}
        </Switch>
    </Router>
    )
  }
}
export default App;

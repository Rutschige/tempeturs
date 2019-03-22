import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobBoard from "./pages/JobBoard";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }
  
  //   this.handleLoginClick = this.handleLoginClick.bind(this);
  //   this.handleLogoutClick = this.handleLogoutClick.bind(this);
  // }

  // handleLoginClick() {
  //   this.setState({ isLoggedIn: true });
  // }

  // handleLogoutClick() {
  //   this.setState({ isLoggedIn: false });
  // }

  render() {
    return (
      <Router>
        <div className="App">
          <NavBar isLoggedIn={false}/>
          <NavBar isLoggedIn={true}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/userprofile" component={UserProfile} />
            <Route exact path="/jobboard" component={JobBoard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./Components/Login.js";
import SignUp from "./Components/SignUp.js";
import MoviesList from "./Components/MoviesList";
import MovieDetails from "./Components/MovieDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="nav-item">
                PrestoAPI Contest By Brunette_coder
              </div>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Switch>
            <Route exact path="/movie/:id" component={MovieDetails} />
            <Route exact path="/" component={MoviesList} />

            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

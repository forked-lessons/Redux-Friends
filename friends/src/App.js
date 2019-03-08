import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Login from "./components/Login";
import Protected from "./components/Protected";
import Public from "./components/Public";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>This is my app</h1>
        <ul>
          <li>
            <Link to="/protected" component={PrivateRoute}>
              Protected Pages
            </Link>
          </li>
          <li>
            <Link to="/public" component={Public}>
              Public Pages
            </Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <Route path="/public" component={Public} />
        <PrivateRoute exact path="/protected" component={Protected} />
      </div>
    </Router>
  );
}

export default App;

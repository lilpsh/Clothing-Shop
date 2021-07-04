import React from "react";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const handleOnClick = () => {
    if (localStorage.getItem("userInfo")) {
      localStorage.removeItem("userInfo");
      history.push("/login");
    }
  };
  return (
    <div className="App">
      <header className="store">
        <h2 className="store-h2">
          <span className="store-h2-point">&#9899;</span>
          Store
        </h2>
        <div className="store-nav">
          <span>
            <Link className="link-home" to="/">
              Home
            </Link>
          </span>
          <span>
            <Link className="link-login" to="/login">
              Login
            </Link>
          </span>
          <span>
            <button className="btn-logout" onClick={handleOnClick}>
              Log out
            </button>
          </span>
        </div>
      </header>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;

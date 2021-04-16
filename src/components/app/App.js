import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    window.ga && window.ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();

  return (
    <Switch>
      <Route exact path="/">
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Route>
    </Switch>
  );
}

export default App;

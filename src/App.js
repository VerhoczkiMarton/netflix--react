import React from "react";
import "./App.css";
import IndexPage from "./Components/IndexPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
          <div className="App">
              <Route exact path="/" component={IndexPage}></Route>

          </div>
      </Router>
  );
}

export default App;

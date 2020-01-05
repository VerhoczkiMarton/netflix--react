import React from "react";
import "./App.css";
import IndexPage from "./Components/IndexPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DetailsPage from "./Components/DetailsPage";

function App() {
  return (
      <Router>
          <div className="App">
              <Route exact path="/" component={IndexPage}/>
              <Route path="/video/:id" render={(props) => <DetailsPage {...props} /> }/>
          </div>
      </Router>
  );
}

export default App;

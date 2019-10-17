import React from "react";
import Collection from "./containers/Collection";
import Home from "./containers/Home";
import Single from "./containers/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/collection/:id" component={Single} />
        <Route path="/collection" component={Collection} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

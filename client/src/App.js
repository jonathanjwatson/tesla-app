import React, { useState } from "react";
import "./App.css";
import Collection from "./containers/Collection";
import Home from "./containers/Home";
import Single from "./containers/Single/Single";
import NewCar from "./containers/NewCar";
import EditCar from "./containers/EditCar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Auth from "./containers/Auth/Auth";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);
  const toggleIsAuthed = () => {
    setIsAuthed(!isAuthed);
  };

  return (
    <Router>
      <NavBar />
      {/* <button onClick={toggleIsAuthed}>Toggle isAuthed</button> */}
      <Switch>
        <Route path="/new-car" component={NewCar} />
        <Route path="/edit/:id" component={EditCar} />
        <Route path="/collection/:id" component={Single} />
        <Route path="/collection" component={Collection} />
        <Route
          path="/auth"
          component={props => <Auth {...props} isAuthed={isAuthed} setIsAuthed={setIsAuthed}/>}
        />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

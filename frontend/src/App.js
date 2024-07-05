import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/article/:id" component={Article} />
      </Switch>
    </Router>
  );
}

export default App;

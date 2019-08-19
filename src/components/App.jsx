import React from "react";
import ResourceList from "./ResourceList";
import Homepage from "./Homepage";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import ResourceView from "./ResourceView";
import Error from "./Error";
import "bootstrap/dist/css/bootstrap.min.css";
import history from "../history";
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/pages/:resource/:pageNum?" component={ResourceList} />
        <Route path="/:resource/:id" component={ResourceView} />
        <Route path="/error" component={Error} />
        <Route
          component={() => {
            history.push("/error");
            return "ds";
          }}
        />
      </Switch>
    </React.Fragment>
  );
};
export default App;

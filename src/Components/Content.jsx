import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

// create all of the Routes for the app here based on the storeData (i.e. state/initial data) passed in
// from App
function Content({ storeData, routeChange }) {
  return (
    <main className="app-content container">
        <Switch>
            {storeData.routes.map((route, index) => (
                <Route key={index} path={route.path} exact={route.exact} children={route.view} render={() => routeChange(route)} props={route.props} />
            ))}
        </Switch>
    </main>
  );
}


export default withRouter(Content);
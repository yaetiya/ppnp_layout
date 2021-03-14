import React from "react";
import { Route, Switch } from "react-router";
import ErrorPage from "../ErrorPage/ErrorPage";
import HomeScreen from "../HomeScreen/HomeScreen";
import UserSitePage from "../UserSitePage/UserSitePage";

const PageContent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomeScreen />
      </Route>
      <Route path="/userpage">
        <UserSitePage />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
    </Switch>
  );
};

export default PageContent;

import React from "react";
import { ReactQueryDevtools } from "react-query-devtools";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeContext } from "context";
import { useTheme } from "hooks/useTheme";

import Todos from "components/Todos/Todos";
import Example from "components/Example/Example";
import Registrtaion from "../components/Registration/Registration";
import Login from "../components/Login/Login";
import PublicLayout from "../modules/layouts/PublicLayout";
import PublicRoute from "../modules/PublicRoute";
import PrivateLayout from "../modules/layouts/PrivateLayout";
import PrivateRoute from "../modules/PrivateRoute";
import Navigator from "../modules/Navigator";
import Files from "../components/Files";
import { Home } from "../components/Home/Home";
import Notifications from "../components/Notifications/Notifications";
import Confirm from "../components/Confirm/Confirm";
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContext.Provider value={useTheme()}>
        <Router>
          <Switch>
            <PublicRoute path={"/registration"} layout={PublicLayout}>
              <Registrtaion />
            </PublicRoute>
            <PublicRoute path={"/login"} layout={PublicLayout}>
              <Login />
            </PublicRoute>
            <PublicRoute path={"/confirm"} layout={PublicLayout}>
              <Confirm />
            </PublicRoute>
            <PrivateRoute path={"/home"} layout={PrivateLayout}>
              <Home />
            </PrivateRoute>
            <PrivateRoute path={"/todos"} layout={PrivateLayout}>
              <Todos />
            </PrivateRoute>
            <PrivateRoute path={"/files"} layout={PrivateLayout}>
              <Files />
            </PrivateRoute>
            <PrivateRoute path={"/notifications"} layout={PrivateLayout}>
              <Notifications />
            </PrivateRoute>
            <Route exact path={"/example"}>
              <Example />
            </Route>
            <Route exact path={"/"}>
              <Navigator />
            </Route>
          </Switch>
        </Router>
        {/*<ReactQueryDevtools initialIsOpen />*/}
      </ThemeContext.Provider>
    </QueryClientProvider>
  );
}

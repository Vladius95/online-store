import * as React from "react";
import { Header } from "./fragments/Header/Header";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { HomePage } from "./fragments/Home/Home";
import { Footer } from "./fragments/Footer/Footer";

export interface MainProps {}

export function Main({}: MainProps) {
  return (
    <HashRouter>
      <Header />
      <main>
        <Redirect exact from="/" to="/home/" />
        <Switch>
          <Route key="home" path="/home/" component={HomePage} />
          <Route key="store" path="/store/" component={() => <div> Store Page </div>} />
          <Route key="about" path="/about/" component={() => <div> About Page </div>} />
          {/* <Route key="user" path="/user/:id" component={<div > Home Page </div>} /> */}
          {/* <Route key="photos" path="/photos/:uid/:pid" component={<div > Home Page </div>} /> */}
        </Switch>
      </main>
      <Footer />
    </HashRouter>
  );
}

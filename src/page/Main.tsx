import "./Main.scss";

import * as React from "react";
import { Header } from "./fragments/Header/Header";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { HomePage } from "./fragments/Home/Home";
import { Footer } from "./fragments/Footer/Footer";
import { StorePage } from "./fragments/Store/StorePage";
import { Provider } from "react-redux";
import { mergedReducers } from "src/store/root";
import { createStore } from "redux";

const rootStore = createStore(mergedReducers);

export function Main() {
  return (
    <Provider store={rootStore}>
      <HashRouter>
        <div className="page-wrapper">
          <Header />
          <main className="main">
            <Redirect exact from="/" to="/store/" />
            <Switch>
              <Route key="home" path="/home/" component={HomePage} />
              <Route key="store" path="/store/" component={StorePage} />
              <Route key="about" path="/about/" component={() => <div> About Page </div>} />
              {/* <Route key="user" path="/user/:id" component={<div > Home Page </div>} /> */}
              {/* <Route key="photos" path="/photos/:uid/:pid" component={<div > Home Page </div>} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </Provider>
  );
}

import "./Main.scss";

import * as React from "react";
import { Header } from "./fragments/Header/Header";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { HomePage } from "./fragments/Home/Home";
import { Footer } from "./fragments/Footer/Footer";
import { StorePage } from "./fragments/Store/StorePage";
import { Provider, useSelector } from "react-redux";
import { mergedReducers, RootState } from "src/store/root";
import { createStore } from "redux";
import { GoodsPage } from "./fragments/Goods/GoodsPage";
import { GoodsCart } from "./fragments/GoodsCart/GoodsCart";

const rootStore = createStore(mergedReducers);

export function Main() {
  return (
    <Provider store={rootStore}>
      <HashRouter>
        <div className="page-wrapper">
          <GoodsCart />
          <Header />
          <main className="main">
            <Redirect exact from="/" to="/store/1" />
            <Switch>
              <Route exact key="home" path="/home/" component={HomePage} />
              <Route exact key="store" path="/store/" component={StorePage} />
              <Route exact key="about" path="/about/" component={() => <div> About Page </div>} />
              <Route exact key="login" path="/login/" component={() => <div> Login Page </div>} />
              <Route key="goods" path="/store/:id" component={GoodsPage} />

              {/* <Route key="photos" path="/photos/:uid/:pid" component={<div > Home Page </div>} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </Provider>
  );
}

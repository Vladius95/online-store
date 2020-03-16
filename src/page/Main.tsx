import "./Main.scss";

import * as React from "react";
import { Header } from "./fragments/Header/Header";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
import { HomePage } from "./fragments/Home/Home";
import { Footer } from "./fragments/Footer/Footer";
import { StorePage } from "./fragments/Store/StorePage";
import { Provider, useSelector, useDispatch } from "react-redux";
import { mergedReducers, RootState } from "src/store/root";
import { createStore, Dispatch } from "redux";
import { GoodsPage } from "./fragments/Goods/GoodsPage";
import { GoodsCart } from "./fragments/GoodsCart/GoodsCart";
import { Registration } from "./fragments/Registration/Registration";
import { Login } from "./fragments/Login/Login";
import { AuthAction, logIn, AuthState } from "src/store/auth";

const rootStore = createStore(mergedReducers);

export function Root() {
  return (
    <Provider store={rootStore}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  );
}

function Main() {
  const authData = useSelector<RootState, AuthState>(state => state.authReducer);
  const dispatch = useDispatch<Dispatch<AuthAction>>();

  React.useEffect(() => {
    const data = logIn();

    if (data.token) {
      dispatch({ type: "AUTH_SUCCESS", state: { ...authData, user: data, isAuthenticated: true } });
    }
  }, []);

  return (
    <div className="page-wrapper">
      <GoodsCart />
      <Header />
      <main className="main">
        <Redirect exact from="/" to="/login/" />
        <Switch>
          <Route exact key="home" path="/home/" component={HomePage} />
          <Route exact key="store" path="/store/" component={StorePage} />
          <Route exact key="about" path="/about/" component={() => <div> About Page </div>} />
          <Route exact key="login" path="/login/" component={Login} />
          <Route exact key="registration" path="/registration/" component={Registration} />
          <Route key="goods" path="/store/:id" component={GoodsPage} />

          {/* <Route key="photos" path="/photos/:uid/:pid" component={<div > Home Page </div>} /> */}
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

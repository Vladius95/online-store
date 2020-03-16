import "./Header.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";
import { Logo } from "./Logo/Logo";
import createBrowserHistory from "history/createBrowserHistory";
import { NavSiteList } from "src/page/components/NavSiteList/NavSiteList";
import { Cart } from "./Cart/Cart";
import { UserAvatar } from "./UserAvatar/UserAvatar";
import { logIn, AuthState } from "src/store/auth";
import { useSelector } from "react-redux";
import { RootState } from "src/store/root";

export function Header() {
  const authData = useSelector<RootState, AuthState>(state => state.authReducer);

  return (
    <header className="header">
      <RouteLink to="/main">
        <Logo size="x48" />
      </RouteLink>

      <div className="header__right">
        <NavSiteList extraClass="header__navigation" />
        {authData.user ? <p className="header__text">Hello {authData.user.firstName}</p> : <UserAvatar />}
        <Cart />
      </div>
    </header>
  );
}

import "./Header.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";
import { Logo } from "./Logo/Logo";
import createBrowserHistory from "history/createBrowserHistory";
import { NavSiteList } from "src/page/components/NavSiteList/NavSiteList";
import { Cart } from "./Cart/Cart";

const history = createBrowserHistory();

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className="header">
      <RouteLink to="/main">
        <Logo size="x48" />
      </RouteLink>

      <div className="header__right">
        <NavSiteList extraClass="header__navigation" />
        <Cart />
      </div>
    </header>
  );
}

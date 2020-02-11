import "./Header.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";
import { Logo } from "./Logo/Logo";
import createBrowserHistory from "history/createBrowserHistory";

const history = createBrowserHistory();

export interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <header className="header">
      <RouteLink to="/main">
        <Logo size="x48" />
      </RouteLink>

      <nav className="navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <RouteLink to="/home">Home</RouteLink>
          </li>
          <li className="navigation__item">
            <RouteLink to="/store">Store</RouteLink>
          </li>
          <li className="navigation__item">
            <RouteLink to="/about">About</RouteLink>
          </li>
          <li className="navigation__item">
            <RouteLink to="/blog">Blog</RouteLink>
          </li>
          <li className="navigation__item">
            <RouteLink to="/sale">Points Of Sale</RouteLink>
          </li>
        </ul>
      </nav>
      {/* <HeaderUserPanel /> */}
    </header>
  );
}

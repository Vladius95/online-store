import "./NavSiteList.scss";

import * as React from "react";
import { RouteLink } from "../CommonLink";

export interface NavSiteListProps {
  extraClass?: string;
}

export function NavSiteList({ extraClass = "" }: NavSiteListProps) {
  return (
    <nav className={`navigation ${extraClass}`}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <RouteLink to="/home" extraClass="navigation__text">
            Home
          </RouteLink>
        </li>
        <li className="navigation__item">
          <RouteLink to="/store" extraClass="navigation__text">
            Store
          </RouteLink>
        </li>
        <li className="navigation__item">
          <RouteLink to="/about" extraClass="navigation__text">
            About
          </RouteLink>
        </li>
        <li className="navigation__item">
          <RouteLink to="/blog" extraClass="navigation__text">
            Blog
          </RouteLink>
        </li>
        <li className="navigation__item">
          <RouteLink to="/sale" extraClass="navigation__text">
            Points Of Sale
          </RouteLink>
        </li>
      </ul>
    </nav>
  );
}

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
  );
}

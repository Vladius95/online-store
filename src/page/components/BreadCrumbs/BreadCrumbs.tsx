import "./BreadCrumbs.scss";

import * as React from "react";
import { RouteLink } from "../CommonLink";

export type BreadCrumb = {
  name: string;
  link: string;
};

export interface BreadCrumbsProps {
  breadCrumbs: BreadCrumb[];
  current: string;
}

export function BreadCrumbs({ breadCrumbs, current }: BreadCrumbsProps) {
  return (
    <ul className="bread-crumbs">
      {breadCrumbs.map((b, key) => (
        <li key={b.name} className="bread-crumbs__item">
          <RouteLink to={b.link}>
            <p className="bread-crumbs__text">{b.name}</p>
          </RouteLink>
        </li>
      ))}
      <li key={current} className="bread-crumbs__item">
        <p className="bread-crumbs__text bread-crumbs__text--current">{current}</p>
      </li>
    </ul>
  );
}

import "./BreadCrumbs.scss";

import * as React from "react";
import { RouteLink } from "../CommonLink";
import * as cn from "classnames";

export type BreadCrumb = {
  name: string;
  link: string;
  current?: boolean;
};

export interface BreadCrumbsProps {
  breadCrumbs: BreadCrumb[];
}

export function BreadCrumbs({ breadCrumbs }: BreadCrumbsProps) {
  return (
    <ul className="bread-crumbs">
      {breadCrumbs.map((b, key) => (
        <li key={key} className={cn("bread-crumbs__item", { "bread-crumbs__item--current": !!b.current })}>
          {b.current ? (
            <p className="bread-crumbs__text">{b.name}</p>
          ) : (
            <RouteLink to={b.link}>
              <p className="bread-crumbs__text">{b.name}</p>
            </RouteLink>
          )}
        </li>
      ))}
    </ul>
  );
}

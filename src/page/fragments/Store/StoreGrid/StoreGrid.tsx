import "./StoreGrid.scss";

import * as React from "react";
import { imageFullPath } from "src/utils/resources";
import { Amount } from "src/page/components/Amount/Amount";
import { RouteLink } from "src/page/components/CommonLink";
import { Goods } from "src/store/goods";

export interface StoreGridProps {
  goods: Goods[];
}

export function StoreGrid({ goods }: StoreGridProps) {
  return (
    <ul className="store-grid">
      {goods.map(g => (
        <li key={g.id} className="store-grid__item">
          <RouteLink to={`/store/${g.id}`}>
            <img src={imageFullPath(g.imgs[0])} alt="Product Image" className="store-grid__image" />
            <p className="store-grid__name">{g.name}</p>
            <Amount amount={g.cost} currency="usd" />
          </RouteLink>
        </li>
      ))}
    </ul>
  );
}

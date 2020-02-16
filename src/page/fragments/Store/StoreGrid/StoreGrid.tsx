import * as React from "react";
import { Goods } from "src/store/goods";
import { imageFullPath } from "src/utils/resources";

export interface StoreGridProps {
  goods: Goods;
}

export function StoreGrid({ goods }: StoreGridProps) {
  return (
    <ul className="store-grid">
      {goods.map(g => (
        <li key={g.id} className="store-grid__item">
          <img src={imageFullPath(g.img)} alt="Product Image" className="store-grid__image" />
          <p className="store-grid__name">{g.name}</p>
        </li>
      ))}
    </ul>
  );
}

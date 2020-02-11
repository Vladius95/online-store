import * as React from "react";
import { Arrow } from "src/page/components/Arrow/Arrow";

const img1 = require("./images/bg1.webp");
const img2 = require("./images/bg2.webp");
const img3 = require("./images/bg3.webp");

export interface LayoutGalleryProps {}

export function LayoutGallery({}: LayoutGalleryProps) {
  return (
    <article className="layout-gallery">
      <ul className="layout-gallery__images">
        <li className="layout-gallery__item">
          <img className="layout-gallery__image" src={img1} />
        </li>
        <li className="layout-gallery__item">
          <img className="layout-gallery__image" src={img2} />
        </li>
        <li className="layout-gallery__item">
          <img className="layout-gallery__image" src={img3} />
        </li>
      </ul>

      <Arrow direction="left" />
      <Arrow direction="right" />
    </article>
  );
}

import * as React from "react";
import { ShopNow } from "./ShopNow/ShopNow";
import { LayoutGallery } from "./LayoutGallery/LayoutGallery";

const img1 = require("./LayoutGallery/images/bg1.webp");
const img2 = require("./LayoutGallery/images/bg2.webp");
const img3 = require("./LayoutGallery/images/bg3.webp");

export function HomePage() {
  return (
    <section className="home-page">
      <h1 className="hp_title">New Outerwear Collection</h1>
      <ShopNow onClick={() => console.log("test")} />
      <LayoutGallery width={800} height={600} imgs={[img1, img2, img3]} />
    </section>
  );
}

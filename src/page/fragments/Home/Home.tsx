import * as React from "react";
import { ShopNow } from "./ShopNow/ShopNow";
import { LayoutGallery } from "./LayoutGallery/LayoutGallery";

export function HomePage() {
  return (
    <section className="home-page">
      <h1 className="hp_title">New Outerwear Collection</h1>
      <ShopNow onClick={() => console.log("test")} />
      <LayoutGallery />
    </section>
  );
}

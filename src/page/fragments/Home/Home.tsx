import "./Home.scss";

import * as React from "react";
import { ShopNowButton } from "./ShopNow/ShopNow";
import { LayoutGallery } from "./LayoutGallery/LayoutGallery";
import { SiteLinks } from "./SiteLinks/SiteLinks";

const img1 = require("./LayoutGallery/images/bg1.webp");
const img2 = require("./LayoutGallery/images/bg2.webp");
const img3 = require("./LayoutGallery/images/bg3.webp");

export function HomePage() {
  return (
    <section className="home-page">
      <ShopNowButton onClick={() => console.log("test")} />
      <LayoutGallery width={800} height={600} imgs={[img1, img2, img3]}>
        <h1 className="home-page__title">New Outerwear Collection</h1>
      </LayoutGallery>
      <SiteLinks />
    </section>
  );
}

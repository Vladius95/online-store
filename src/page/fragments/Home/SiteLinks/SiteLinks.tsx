import "./SiteLinks.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";

const storyImage = require("./images/story.webp");
const blogImage = require("./images/blog.webp");

export function SiteLinks() {
  return (
    <section className="site-links">
      <div className="site-links__wrapper">
        <RouteLink to="/about" extraClass="site-links__link">
          <h3 className="site-links__link-text">Our Story</h3>
        </RouteLink>
        <img src={storyImage.default} alt="Our Story" className="site-links__link-image" />
      </div>
      <div className="site-links__wrapper">
        <RouteLink to="/blog" extraClass="site-links__link">
          <h3 className="site-links__link-text">Our Blog</h3>
        </RouteLink>
        <img src={blogImage.default} alt="Blog Story" className="site-links__link-image" />
      </div>
    </section>
  );
}

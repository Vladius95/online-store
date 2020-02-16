import "./FooterLinks.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";

export function FooterLinks() {
  return (
    <div className="footer-links">
      <RouteLink to="/shipping-and-returns" extraClass="footer-links__route-link">
        <p className="footer-links__text">Shipping & Returns</p>
      </RouteLink>
      <RouteLink to="/faq" extraClass="footer-links__route-link">
        <p className="footer-links__text">FAQ</p>
      </RouteLink>
    </div>
  );
}

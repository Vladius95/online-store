import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";

export function FooterLinks() {
  return (
    <div className="footer__site-links">
      <RouteLink to="/shipping-and-returns" extraClass="footer__link">
        <p className="footer__text">Shipping & Returns</p>
      </RouteLink>
      <RouteLink to="/faq" extraClass="footer__link">
        <p className="footer__text">FAQ</p>
      </RouteLink>
    </div>
  );
}

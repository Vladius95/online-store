import * as React from "react";
import { CommonLink } from "src/page/components/CommonLink";

export function Contacts() {
  return (
    <div className="footer__contacts">
      <address className="footer__address">
        <p className="footer__text">500 Terry Francois St.</p>
        <br />
        <p className="footer__text">San Francisco, CA 94158</p>
      </address>

      <br />
      <br />

      <CommonLink href="mailto:info@my-domain.com" extraClass="footer__email">
        <p className="footer__text">Email: info@my-domain.com</p>
      </CommonLink>

      <CommonLink href="tel:1-800-000-0000" extraClass="footer__tel">
        <p className="footer__text">Tel: 1-800-000-0000</p>
      </CommonLink>
    </div>
  );
}

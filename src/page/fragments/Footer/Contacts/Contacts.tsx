import "./Contacts.scss";

import * as React from "react";
import { CommonLink } from "src/page/components/CommonLink";

export function Contacts() {
  return (
    <div className="contacts">
      <address className="contacts__address">
        <p className="contacts__text">500 Terry Francois St.</p>
        <p className="contacts__text">San Francisco, CA 94158</p>
      </address>

      <br />
      <br />

      <CommonLink href="mailto:info@my-domain.com" extraClass="contacts__email">
        <p className="contacts__text">Email: info@my-domain.com</p>
      </CommonLink>

      <CommonLink href="tel:1-800-000-0000" extraClass="contacts__tel">
        <p className="contacts__text">Tel: 1-800-000-0000</p>
      </CommonLink>
    </div>
  );
}

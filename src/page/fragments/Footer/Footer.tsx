import "./Footer.scss";

import * as React from "react";
import { NavSiteList } from "src/page/components/NavSiteList/NavSiteList";
import { Contacts } from "./Contacts/Contacts";
import { SubscriptionForm } from "./SubscriptionForm/SubscriptionForm";
import { FooterLinks } from "./FooterLinks/FooterLinks";

export function Footer() {
  return (
    <footer className="footer">
      <NavSiteList extraClass="footer__navigation" />
      <Contacts />
      <FooterLinks />
      <SubscriptionForm />
    </footer>
  );
}

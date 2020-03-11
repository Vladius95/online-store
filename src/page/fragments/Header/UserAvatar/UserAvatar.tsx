import "./UserAvatar.scss";

import * as React from "react";
import { RouteLink } from "src/page/components/CommonLink";

const userAvatar = require("./user-avatar.svg").default;

export function UserAvatar() {
  return (
    <RouteLink to="/login" extraClass="user-avatar">
      <img src={userAvatar} alt="User avatar" className="user-avatar__image x16" />
      <p className="user-avatar__text">Log in</p>
    </RouteLink>
  );
}

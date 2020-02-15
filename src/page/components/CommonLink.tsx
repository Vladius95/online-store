import "./CommonLink.scss";

import React from "react";
import { Link, LinkProps } from "react-router-dom";
import classNames from "classnames";

interface RouteLinkProps extends Omit<LinkProps, "className"> {
  disabled?: boolean;
  extraClass?: string;
}

export const RouteLink: React.FC<RouteLinkProps> = ({ disabled = false, extraClass = "", ...linkProps }) => (
  <Link {...linkProps} className={classNames(`common-link ${extraClass}`, { "common-link-disabled": disabled })} />
);

interface CommonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  disabled?: boolean;
  extraClass?: string;
}

export const CommonLink: React.FC<CommonLinkProps> = ({ disabled = false, extraClass = "", ...aProps }) => (
  <a {...aProps} className={classNames(`common-link ${extraClass}`, { "common-link-disabled": disabled })} />
);

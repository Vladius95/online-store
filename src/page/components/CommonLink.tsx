import "./CommonLink.scss";

import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface RouteLinkProps extends Omit<LinkProps, "className"> {
  extraClass?: string;
}

export const RouteLink: React.FC<RouteLinkProps> = ({ extraClass = "", ...linkProps }) => (
  <Link {...linkProps} className={`common-link ${extraClass}`} />
);

interface CommonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
  extraClass?: string;
}

export const CommonLink: React.FC<CommonLinkProps> = ({ extraClass = "", ...aProps }) => (
  <a {...aProps} className={`common-link ${extraClass}`} />
);

export function BorderedLink(props: RouteLinkProps) {
  return <RouteLink {...props} extraClass="bordered-link" />;
}

import React from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

export const IntoPortal = ({ children }: PortalProps) => {
  const layoutRef = React.useRef<HTMLDivElement>(document.getElementById("layout-root") as HTMLDivElement);

  return createPortal(children, layoutRef.current);
};

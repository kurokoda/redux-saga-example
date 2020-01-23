import React from "react";
import "./component.scss";

function PageHeader({ children }) {
  return <h3 className="page-header__container">{children}</h3>;
}

export { PageHeader };

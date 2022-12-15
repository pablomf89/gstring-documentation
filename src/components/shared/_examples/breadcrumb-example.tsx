import React, { ReactElement } from "react";

export const BreadcrumbExample: React.FC = (props): ReactElement => {
  return (
    <div className="row ui-section">
      <div className="box-12">
        <h3 className="title">BREADCRUMB</h3>
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#1">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#1">Nav 1</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#1">Nav 2</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#1">Nav 3</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbExample;

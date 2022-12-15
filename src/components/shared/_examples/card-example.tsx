import React, { ReactElement } from "react";

export const CardExample: React.FC = (props: any): ReactElement => {
  return (
    <div className="row ui-section">
      <div className="box-12">
        <h3 className="title">Card</h3>
      </div>
      <div className="box-12">
        <div className="card" style={{ width: "50%" }}>
          <div className="card-header">Card Header</div>
          <div className="card-body">Card Body Example</div>
          <div className="card-footer">Card Footer</div>
        </div>
      </div>
    </div>
  );
};

export default CardExample;

import React, { ReactElement } from "react";

export const MessagesExample: React.FC = (): ReactElement => {
  return (
    <>
      <div className="message message-info mb-2  shadow">
        <div className="icon">
          <i className="fa fa-cog fa-spin"></i>
        </div>
        <div className="copy">
          <p>
            <strong>Loading:</strong> Please wait
          </p>
        </div>
      </div>
      <div className="message message-info mb-2  shadow">
        <div className="icon">
          <i className="fa fa fa-exclamation-circle"></i>
        </div>
        <div className="copy">
          <p>
            <strong>Info:</strong> No results found
          </p>
        </div>
      </div>
      <div className="message message-warning mb-2  shadow">
        <div className="icon">
          <i className="fa fa-exclamation-triangle"></i>
        </div>
        <div className="copy">
          <p>
            <strong>Info:</strong> There was an error submiting your enquiry
          </p>
        </div>
      </div>
      <div className="message message-error mb-2  shadow">
        <div className="icon">
          <i className="fa fa-times"></i>
        </div>
        <div className="copy">
          <p>
            <strong>Error:</strong> Check your entries
          </p>
        </div>
      </div>
      <div className="message message-success mb-2  shadow">
        <div className="icon">
          <i className="fa fa-check"></i>
        </div>
        <div className="copy">
          <p>
            <strong>Success:</strong> Your enquiry has been submited
          </p>
        </div>
      </div>
    </>
  );
};

export default MessagesExample;

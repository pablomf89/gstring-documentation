import React from "react";
import MessagesExample from "components/content/pages/messagesPage/messages-example";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
export default class MessagesPage extends React.Component {
  render() {
    return (
      <>
        <MessagesExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import React, { ReactElement } from "react"; \n \nexport const MessagesExample: React.FC = (): ReactElement => { \n  return ( \n    <> \n      <div className="message message-info mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-cog fa-spin"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Loading:</strong> Please wait \n          </p> \n        </div> \n      </div> \n      <div className="message message-info mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa fa-exclamation-circle"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Info:</strong> No results found \n          </p> \n        </div> \n      </div> \n      <div className="message message-warning mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-exclamation-triangle"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Info:</strong> There was an error submiting your enquiry \n          </p> \n        </div> \n      </div> \n      <div className="message message-error mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-times"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Error:</strong> Check your entries \n          </p> \n        </div> \n      </div> \n      <div className="message message-success mb-2  shadow"> \n        <div className="icon"> \n          <i className="fa fa-check"></i> \n        </div> \n        <div className="copy"> \n          <p> \n            <strong>Success:</strong> Your enquiry has been submited \n          </p> \n        </div> \n      </div> \n    </> \n  ); \n}; \n \nexport default MessagesExample; \n'
          }
        </SyntaxHighlighter>
      </>
    );
  }
}

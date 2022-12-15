import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import NotificationsExample from "components/content/pages/notificationsPage/notifications-example";
export default class NotificationsPage extends React.Component {
  render() {
    return (
      <div className="inner">
        <NotificationsExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import React from "react"; \nimport { addNotification } from "../notifications/notifications-service"; \n \nexport default class NotificationsExample extends React.Component { \n  render() { \n    return ( \n      <> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "success", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Success Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "error", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Error Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "warning", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Warning Notification \n        </button> \n        <button \n          className="btn mr10" \n          onClick={() => { \n            addNotification({ \n              type: "info", \n              content: "Lorem ipsum dolor", \n              timer: 3, \n            }); \n          }} \n        > \n          Add Info Notification \n        </button> \n      </> \n    ); \n  } \n} \n'
          }
        </SyntaxHighlighter>
      </div>
    );
  }
}

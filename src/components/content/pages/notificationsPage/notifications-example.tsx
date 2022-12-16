import React from "react";
import { addNotification } from "../../../master/context/notifications/notifications-service";

export default class NotificationsExample extends React.Component {
  render() {
    return (
      <>
        <button
          className="btn mr10 mb10"
          onClick={() => {
            addNotification({
              type: "success",
              content: "Lorem ipsum dolor",
              timer: 3,
            });
          }}
        >
          Add Success Notification
        </button>
        <button
          className="btn mr10 mb10"
          onClick={() => {
            addNotification({
              type: "error",
              content: "Lorem ipsum dolor",
              timer: 3,
            });
          }}
        >
          Add Error Notification
        </button>
        <button
          className="btn mr10 mb10"
          onClick={() => {
            addNotification({
              type: "warning",
              content: "Lorem ipsum dolor",
              timer: 3,
            });
          }}
        >
          Add Warning Notification
        </button>
        <button
          className="btn mr10 mb10"
          onClick={() => {
            addNotification({
              type: "info",
              content: "Lorem ipsum dolor",
              timer: 3,
            });
          }}
        >
          Add Info Notification
        </button>
        {/* <NotificationsContainer /> */}
      </>
    );
  }
}

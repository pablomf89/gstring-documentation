import React, { ReactElement } from "react";
import { useSelector } from "react-redux";
import { INotificationitem } from "./notifications-service";
import { Notification } from "@3ffect/gstring";
import { RootState } from "redux/store";
const NotificationsContainer: React.FC<any> = (props: any): ReactElement => {
  const _notificationsState: any = useSelector((state: RootState) => {
    return state.notifications;
  });

  return (
    <div className="notifcations-container container">
      {props.children}
      {_notificationsState &&
        _notificationsState.map((item: INotificationitem) => {
          return <Notification type={item.type} id={item.id} key={item.id} timer={item.timer} richText={item.richText} content={item.content} />;
        })}
    </div>
  );
};

export default NotificationsContainer;

import React from "react";
import store from "../../../../redux/store";
import { addNotification as _addNotification, removeNotification as _removeNotification } from "../../../../redux/slices/notificationsSlice";

export interface INotificationitem {
  type: string;
  content?: JSX.Element | string;
  richText?: boolean;
  timer?: number;
  id?: string;
  [others: string]: any;
}

export const addNotification = (notObct: INotificationitem) => {
  if (store) {
    store.dispatch(_addNotification(notObct));
  }
};

export const removeNotification = (notId: string | undefined) => {
  if (store) {
    if (notId) {
      store.dispatch(_removeNotification(notId));
    }
  }
};

export const getIcon = (type: string) => {
  switch (type) {
    case "success":
      return <i className="fa fa-check-circle notification-type-icon"></i>;
    case "error":
      return <i className="fa fa-times notification-type-icon"></i>;
    case "warning":
      return <i className="fa fa-exclamation-triangle notification-type-icon"></i>;
    case "info":
      return <i className="fa fa-info-circle notification-type-icon"></i>;
    case "loading":
      return <i className="fa fa-cog fa-spin"></i>;
    default:
      return <i className="fa fa-bell notification-type-icon"></i>;
  }
};

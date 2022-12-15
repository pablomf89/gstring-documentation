import { createSlice } from "@reduxjs/toolkit";
import { INotificationitem } from "../../components/master/context/notifications/notifications-service";

const initialState: INotificationitem[] = [];
export const notificationsSlice = createSlice({
  name: "notifications",
  initialState: initialState,
  reducers: {
    addNotification: (state, action) => {
      const _newNotification: INotificationitem = action.payload;
      if (_newNotification) {
        let _notifications: INotificationitem[] = state;
        _newNotification.id = _newNotification.id ? _newNotification.id : Date.now().toString();
        if (_notifications) {
          _notifications.push(_newNotification);
        } else {
          _notifications = [_newNotification];
        }
        state = _notifications;
      }
    },
    removeNotification: (state, action) => {
      let _notifications: INotificationitem[] = state;
      state = _notifications.filter((notification) => notification.id !== action.payload);
      return state;
    },
  },
});

export const notifications = (state: INotificationitem[]) => state;
export const { addNotification, removeNotification } = notificationsSlice.actions;
export default notificationsSlice.reducer;

import React, { ReactElement } from "react";
import { Calendar } from "@3ffect/gstring";

let defaultDate = new Date(Date.now());
let activeDate = new Date(defaultDate.setDate(defaultDate.getDate() + 1));
let disabledDate = new Date(defaultDate.setDate(defaultDate.getDate() + 5));

export const CalendarExample: React.FC = (): ReactElement => {
  return <Calendar activeDates={[activeDate]} disabledDates={[disabledDate]} defaultDate={defaultDate} />;
};

export default CalendarExample;

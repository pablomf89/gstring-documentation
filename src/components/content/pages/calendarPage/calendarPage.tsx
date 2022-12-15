import React from "react";
import CalendarExample from "components/content/pages/calendarPage/calendar-example";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default class CalendarPage extends React.Component {
  render() {
    return (
      <div className="inner">
        <CalendarExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import React, { ReactElement } from "react"; \nimport Calendar from "../calendar/calendar"; \n \nlet defaultDate = new Date(Date.now()); \nlet activeDate = new Date(defaultDate.setDate(defaultDate.getDate() + 1)); \nlet disabledDate = new Date(defaultDate.setDate(defaultDate.getDate() + 5)); \n \nexport const CalendarExample: React.FC = (): ReactElement => { \n  return <Calendar activeDates={[activeDate]} disabledDates={[disabledDate]} defaultDate={defaultDate} />; \n}; \n \nexport default CalendarExample; \n'
          }
        </SyntaxHighlighter>
      </div>
    );
  }
}

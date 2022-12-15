import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import DatePickerExample from "components/content/pages/datePickerPage/date-picker-example";

export default class DatePickerPage extends React.Component {
  render() {
    return (
      <>
        <DatePickerExample />

        <div className="inner">
          <SyntaxHighlighter language="typescript" style={vs}>
            {
              'import React, { ReactElement } from "react"; \nimport DateInput, { datePickerMode } from "../forms/date-input"; \nimport { required, date } from "../forms/utilities/validations"; \n \nexport const DatePickerExample: React.FC = (props): ReactElement => { \n  return ( \n    <div className=" row "> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            disableFutureDates={true} \n            dateFormat={"DD MMMM YYYY"} \n            disabledDates={new Date(Date.now())} \n            defaultValue={new Date(Date.now())} \n            validations={[required, date]} \n            placeholder="date" \n            name="myDate" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n            label="Simple date picker" \n          /> \n        </div> \n      </div> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            label="Range date picker" \n            disablePastDates={true} \n            mode={datePickerMode.RANGE} \n            dateFormat={"DD MMMM YYYY"} \n            validations={[required]} \n            placeholder="date" \n            name="myDate1" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n          /> \n        </div> \n      </div> \n      <div className="box-4 "> \n        <div className="inner"> \n          <DateInput \n            label="Multiple date picker" \n            mode={datePickerMode.MULTIPLE} \n            dateFormat={"DD MMMM YYYY"} \n            validations={[required]} \n            placeholder="date" \n            name="myDate2" \n            customCalendar={true} \n            validateBeforeSubmit={false} \n          /> \n        </div> \n      </div> \n    </div> \n  ); \n}; \n \nexport default DatePickerExample; \n'
            }
          </SyntaxHighlighter>
        </div>
      </>
    );
  }
}

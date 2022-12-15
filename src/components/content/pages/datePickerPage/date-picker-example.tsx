import React, { ReactElement } from "react";
import { DateInput, datePickerMode } from "@3ffect/gstring";
import { required, date } from "@3ffect/gstring";

export const DatePickerExample: React.FC = (props): ReactElement => {
  return (
    <div className=" row ">
      <div className="box-4 ">
        <div className="inner">
          <DateInput
            disableFutureDates={true}
            dateFormat={"DD MMMM YYYY"}
            disabledDates={new Date(Date.now())}
            defaultValue={new Date(Date.now())}
            validations={[required, date]}
            placeholder="date"
            name="myDate"
            customCalendar={true}
            validateBeforeSubmit={false}
            label="Simple date picker"
          />
        </div>
      </div>
      <div className="box-4 ">
        <div className="inner">
          <DateInput
            label="Range date picker"
            disablePastDates={true}
            mode={datePickerMode.RANGE}
            dateFormat={"DD MMMM YYYY"}
            validations={[required]}
            placeholder="date"
            name="myDate1"
            customCalendar={true}
            validateBeforeSubmit={false}
          />
        </div>
      </div>
      <div className="box-4 ">
        <div className="inner">
          <DateInput
            label="Multiple date picker"
            mode={datePickerMode.MULTIPLE}
            dateFormat={"DD MMMM YYYY"}
            validations={[required]}
            placeholder="date"
            name="myDate2"
            customCalendar={true}
            validateBeforeSubmit={false}
          />
        </div>
      </div>
    </div>
  );
};

export default DatePickerExample;

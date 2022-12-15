import React from "react";
import { SelectFilter, SelectFilterOption } from "@3ffect/gstring";
import { required } from "@3ffect/gstring";

export interface IState {
  [others: string]: any;
}

export default class SelectFilterExample extends React.Component<IState> {
  render() {
    return (
      <div className="row ui-section">
        <div className="box-12">
          <h3 className="title">Select Filter</h3>
        </div>
        <div className="box-12">
          <SelectFilter showSelectAllOption={true} tooltip="tooltip example" label="Select Colour (multiple)" validations={[required]} value={["1", "5"]} multiple={true} name="color">
            <SelectFilterOption value="1" label="Red" />
            <SelectFilterOption value="2" label="Yellow" />
            <SelectFilterOption value="3" label="Orange" />
            <SelectFilterOption value="4" label="Pink" />
            <SelectFilterOption value="5" label="Purple" />
            <SelectFilterOption value="6" label="Blue" />
            <SelectFilterOption value="7" label="Grey" />
            <SelectFilterOption value="8" label="White" />
            <SelectFilterOption value="9" label="Black" />
          </SelectFilter>
        </div>
        <div className="box-12">
          <SelectFilter label="Select Colour (single)" validations={[required]} value={"1"} multiple={false} name="color">
            <SelectFilterOption value="1" label="Red" />
            <SelectFilterOption value="2" label="Yellow" />
            <SelectFilterOption value="3" label="Orange" />
            <SelectFilterOption value="4" label="Pink" />
            <SelectFilterOption value="5" label="Purple" />
            <SelectFilterOption value="6" label="Blue" />
            <SelectFilterOption value="7" label="Grey" />
            <SelectFilterOption value="8" label="White" />
            <SelectFilterOption value="9" label="Black" />
          </SelectFilter>
        </div>
      </div>
    );
  }
}

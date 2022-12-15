import React, { ReactElement } from "react";
import { required } from "@3ffect/gstring";
import { Form, TextInput, CheckboxInput, RadioInput, SelectInput, TextArea } from "@3ffect/gstring";
export const GlobalStyles: React.FC = (): ReactElement => {
  return (
    <>
      <Form>
        {/* START TEXT INPUTS */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Text inputs</h3>
          </div>
        </div>
        <div className="row ui-section">
          <div className="box-6">
            <TextInput tooltip="tooltip example" label="Text input" placeholder="enabled" name="title" type="text" validateOnChange={true} />
          </div>
          <div className="box-6">
            <TextInput label="Text input error" errors={["Required"]} className=" error" placeholder="example error" name="title" type="text" />
          </div>
          <div className="box-6">
            <TextInput label="Text input disabled" placeholder="disabled" name="title" type="text" disabled={true} />
          </div>
          <div className="box-6">
            <TextInput label="Text input valid" className=" valid" placeholder="example valid" name="title" type="text" validateOnChange={true} />
          </div>
        </div>
        {/* END TEXT INPUTS */}
        {/* START TEXT areas */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Text areas</h3>
          </div>
          <div className="box-6">
            <TextArea label="Textarea" placeholder="example" name="title" type="text" />
          </div>
          <div className="box-6">
            <TextArea label="Textarea error" errors={["Required"]} className=" error" placeholder="example error" name="title" type="text" />
          </div>
          <div className="box-6">
            <TextArea label="Textarea disabled" placeholder="disabled" name="title" type="text" disabled={true} />
          </div>
          <div className="box-6">
            <TextArea label="Textarea valid" className=" valid" placeholder="example valid" name="title" type="text" />
          </div>
        </div>
        {/* END TEXT areas */}
        {/* START Select dropdowns */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Select dropdowns</h3>
          </div>
          <div className="box-6">
            <SelectInput className="" name="myselect">
              <option value="">Select</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput className="error" name="myselect" errors={["Required"]} value="first">
              <option value="">Select</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput name="myselect" disabled={true}>
              <option value="">Select</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput className="valid" name="myselect">
              <option value="">Select</option>
            </SelectInput>
          </div>
        </div>
        {/* END Select dropdowns */}
        {/* START checkboxes */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Checkboxes</h3>
          </div>
          <div className="box-6">
            <CheckboxInput tooltip="tooltip example" errors={["Required"]} validations={[required]} placeholder="Default text" name="myInput" label="checkbox 1" value="value" />
            <CheckboxInput checked={true} name="myInput" label="checkbox 2" value="value 2" />
          </div>
        </div>
        {/* END checkboxes */}
        {/* START radios */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Radio</h3>
          </div>
          <div className="box-6">
            <RadioInput validations={[required]} name="radioName" label="radio 1" value="radio2" />
            <RadioInput validations={[required]} checked={true} name="radioName" label="radio 2" value="radio2" />
          </div>
        </div>
        {/* END radios */}
        {/* START Select dropdowns */}
        <div className="row ui-section">
          <div className="box-12">
            <h3 className="title">Select Multiple</h3>
          </div>
          <div className="box-6">
            <SelectInput multiple={true} className="" name="myselect">
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput multiple={true} className="error" name="myselect" errors={["Required"]} value={["1"]}>
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput multiple={true} name="myselect" disabled={true}>
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </SelectInput>
          </div>
          <div className="box-6">
            <SelectInput multiple={true} className="valid" name="myselect">
              <option value="1">Select</option>
              <option value="2">Option 1</option>
              <option value="3">Option 2</option>
            </SelectInput>
          </div>
        </div>

        {/* END Select Multiple dropdowns */}
      </Form>
    </>
  );
};

export default GlobalStyles;

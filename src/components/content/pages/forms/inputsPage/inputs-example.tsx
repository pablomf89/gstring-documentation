import React, { ReactElement } from "react";
import { FileInput, required, SelectFilter, SelectFilterOption, Wysiwyg } from "@3ffect/gstring";
import { Form, TextInput, CheckboxInput, RadioInput, SelectInput, TextArea, SwitchInput } from "@3ffect/gstring";
export const InputsExample: React.FC = (): ReactElement => {
  return (
    <>
      <Form>
        {/* START TEXT INPUTS */}
        <div className="box-6"></div>
        <div className="inner">
          <h3 className="title">Text inputs</h3>
        </div>
        <div>
          <div className="box-6">
            <div className="inner">
              <TextInput tooltip="tooltip example" label="Text input" placeholder="enabled" name="title" type="text" validateOnChange={true} />
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <TextInput label="Text input error" errors={["Required"]} className=" error" placeholder="example error" name="title" type="text" />
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="box-6">
            <div className="inner">
              <TextInput label="Text input disabled" placeholder="disabled" name="title" type="text" disabled={true} />
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <TextInput label="Text input valid" className=" valid" placeholder="example valid" name="title" type="text" validateOnChange={true} />
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* END TEXT INPUTS */}
        {/* START TEXT areas */}
        <div>
          <div className="inner">
            <h3 className="title">Text areas</h3>
          </div>

          <div className="box-6">
            <div className="inner">
              <TextArea label="Textarea" placeholder="example" name="title" type="text" />
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <TextArea label="Textarea error" errors={["Required"]} className=" error" placeholder="example error" name="title" type="text" />
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="box-6">
            <div className="inner">
              <TextArea label="Textarea disabled" placeholder="disabled" name="title" type="text" disabled={true} />
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <TextArea label="Textarea valid" className=" valid" placeholder="example valid" name="title" type="text" />
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* END TEXT areas */}
        {/* START Select dropdowns */}
        <div>
          <div className="inner">
            <h3 className="title">Select dropdowns</h3>
          </div>

          <div className="box-6">
            <div className="inner">
              <SelectInput className="" name="myselect">
                <option value="">Select</option>
              </SelectInput>
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <SelectInput className="error" name="myselect" errors={["Required"]} value="first">
                <option value="">Select</option>
              </SelectInput>
            </div>
          </div>
          <div className="clearfix"></div>

          <div className="box-6">
            <div className="inner">
              <SelectInput name="myselect" disabled={true}>
                <option value="">Select</option>
              </SelectInput>
            </div>
          </div>

          <div className="box-6">
            <div className="inner">
              <SelectInput className="valid" name="myselect">
                <option value="">Select</option>
              </SelectInput>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
        {/* END Select dropdowns */}
        {/* START checkboxes */}
        <div>
          <div className="inner">
            <h3 className="title">Checkboxes</h3>
          </div>
          <div className="inner">
            <CheckboxInput tooltip="tooltip example" errors={["Required"]} validations={[required]} placeholder="Default text" name="myInput" label="checkbox 1" value="value" />
            <CheckboxInput checked={true} name="myInput" label="checkbox 2" value="value 2" />
          </div>
          <div className="clearfix"></div>
        </div>
        <div className="inner"></div>
        {/* END checkboxes */}
        {/* START radios */}
        <div>
          <div className="inner">
            <h3 className="title">Radio</h3>
          </div>

          <div className="inner">
            <RadioInput validations={[required]} name="radioName" label="radio 1" value="radio2" />
            <RadioInput validations={[required]} checked={true} name="radioName" label="radio 2" value="radio2" />
          </div>

          <div className="clearfix"></div>
        </div>
        {/* END radios */}

        {/* START Select dropdowns */}
        <div>
          <div className="inner">
            <h3 className="title">Select Multiple</h3>
          </div>
          <div className="box-6">
            <div className="inner">
              <SelectInput multiple={true} className="" name="myselect">
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </SelectInput>
            </div>
          </div>
          <div className="box-6">
            <div className="inner">
              <SelectInput multiple={true} className="error" name="myselect" errors={["Required"]} value={["1"]}>
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </SelectInput>
            </div>
          </div>
          <div className="box-6">
            <div className="inner">
              <SelectInput multiple={true} name="myselect" disabled={true}>
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </SelectInput>
            </div>
          </div>
          <div className="box-6">
            <div className="inner">
              <SelectInput multiple={true} className="valid" name="myselect">
                <option value="1">Select</option>
                <option value="2">Option 1</option>
                <option value="3">Option 2</option>
              </SelectInput>
            </div>
          </div>
        </div>
        <div>
          <div className="inner">
            <h3 className="title">Select filter</h3>
          </div>

          <div className="inner">
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

          <div className="clearfix"></div>
        </div>
        <div className="inner">
          <h3 className="title">File uploader</h3>
        </div>

        <div className="inner">
          <FileInput fileCaption={"Accepts all file types"} validations={[required]} label="File upload" placeholder="enabled" name="textInput" type="text" validateOnChange={true} multiple={true} />
        </div>

        <div>
          <div className="inner">
            <h3 className="title">Wysiwyg</h3>
          </div>

          <div className="inner">
            <Wysiwyg
              undo
              redo
              headers
              bold
              italic
              strikeThrough
              justifyCenter
              justifyLeft
              justifyRight
              justifyFull
              unorderedList
              orderedList
              label="Wysiwyg"
              tooltip="Tooltip example"
              validations={[required]}
              name="exampleWysiwig"
            />
          </div>

          <div className="clearfix"></div>
        </div>
        <div className="inner">
          <h3 className="title">SwitchInput</h3>
        </div>

        <div className="inner">
          <SwitchInput name="termsandcond" value="true" label="I accept terms and conditions" validations={[required]} />
        </div>

        <div className="clearfix"></div>

        {/* END Select Multiple dropdowns */}
      </Form>
    </>
  );
};

export default InputsExample;

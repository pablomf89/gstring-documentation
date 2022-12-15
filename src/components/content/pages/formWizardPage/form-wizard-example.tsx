import React, { Component } from "react";
import { FormWizard, FormStep } from "@3ffect/gstring";
import { TextInput, CheckboxInput, RadioInput, TextArea } from "@3ffect/gstring";
import { SelectFilter, SelectFilterOption } from "@3ffect/gstring";
import { required, email } from "@3ffect/gstring";

export default class FormWizardExample extends Component {
  state = {
    values: null,
  };
  submitWizard = (data: any) => {
    this.setState({ values: data });
  };
  render() {
    if (this.state.values) {
      return (
        <div className="row ui-section">
          <div className="inner">
            <div>
              <h3>Thank you for your submission</h3>
              <p>{JSON.stringify(this.state.values)}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="row ui-section">
          <div className="inner">
            <FormWizard onSubmit={(data: any) => this.submitWizard(data)} hideSubmitButton={false}>
              <FormStep>
                <div>
                  <p className="h4">Step 1</p>
                  <TextInput label={"Name"} name="name" type="text" key={1} validations={[required]} />
                  <TextInput label={"Surname"} name="surname" type="text" key={2} validations={[]} />
                  <TextInput label={"Email"} name="email" type="email" key={4} validations={[required, email]} />
                </div>
              </FormStep>
              <FormStep>
                <div>
                  <p className="h4">Step 2</p>
                  <TextArea validations={[required]} placeholder="Default text" key={3} name="myTextArea" label="Default Textarea" validateBeforeSubmit={false} />

                  <SelectFilter label="Select Colour (multiple)" validations={[required]} multiple={true} name="color">
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
              </FormStep>
              <FormStep>
                <div>
                  <p className="h4">Step 3</p>
                  <TextInput label={"Address line 1"} name="addr1" type="text" validations={[required]} />
                  <TextInput label={"Address line 1"} name="addr2" type="text" validations={[required]} />
                  <TextInput label={"Address line 1"} name="addr3" type="text" validations={[required]} />
                </div>
              </FormStep>

              <FormStep>
                <div>
                  <p className="h4">Step 4</p>
                  <div>
                    <CheckboxInput name="timeSensitive" type="checkbox" label="Once a week" value={"1"} />
                  </div>
                  <div>
                    <CheckboxInput name="temperatureSensitive" type="checkbox" label="Potatoes" value={"1"} />
                  </div>
                  <div>
                    <CheckboxInput name="critical" type="checkbox" label="Critical" value={"1"} />
                  </div>
                  <div>
                    <RadioInput validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 1" value="radio1" />
                    <RadioInput validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 2" value="radio2" />
                    <RadioInput className="mb20" validations={[required]} name="myRadio" validateBeforeSubmit={false} label="radio 3" value="radio3" />
                  </div>
                </div>
              </FormStep>
              <FormStep>
                <div className="mb-4">
                  <h3>Thanks for your interest</h3>
                  <button type="submit" className="btn btn-primary ">
                    Submit my data
                  </button>
                </div>
              </FormStep>
            </FormWizard>
          </div>
        </div>
      );
    }
  }
}

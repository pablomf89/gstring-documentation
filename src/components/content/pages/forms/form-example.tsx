import React, { ReactElement } from "react";
import { required } from "@3ffect/gstring";
import { Form, Wysiwyg, TextInput, CheckboxInput, RadioInput, SelectInput, TextArea, serializeForm, SelectFilter, SelectFilterOption, SwitchInput } from "@3ffect/gstring";

let formRef: any = undefined;

const handleSubmit = async (event: any) => {
  //getting values using HTML vanilla
  const isValid_HTML = event.target.isValid;
  const values_HTML = serializeForm(event.target);
  //same thing using react classes
  // const isValid_react = await formRef.current.isValid();
  // const values_react = formRef.current.serialize();
  if (isValid_HTML) {
    console.log(values_HTML);
  } else {
    console.log("Form is invalid");
  }
};

const handleOnChange = async (event: any) => {
  //getting values using HTML vanilla
  // const isValid_HTML = event.target.isValid;
  // const values_HTML = serializeForm(event.target);
  //const isValid_react = await formRef.current.isValid();
  const _form = formRef.current as Form;
  const values_react = _form.serialize(); //you can exclude the empty values adding "true" as parameter

  console.info("Input changed", values_react);
};

export const FormExample: React.FC = (): ReactElement => {
  formRef = React.createRef();
  return (
    <Form ref={formRef} onSubmit={handleSubmit} onChange={handleOnChange}>
      <TextInput validations={[required]} label="Text input" placeholder="enabled" name="textInput" type="text" validateOnChange={true} />
      <TextInput validations={[required]} label="Nested props example" placeholder="enabled" name="nestedObject[0].property" type="text" validateOnChange={true} />
      <TextArea validations={[required]} label="Textarea" placeholder="example" name="textarea" type="text" />
      <SelectInput label="Select" className="" name="myselect" validations={[required]}>
        <option value="">Select</option>
        <option value="1">Select value 1</option>
      </SelectInput>
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
      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value1" />
      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value2" />
      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 2" value="value 3" />
      <RadioInput validations={[required]} name="radio" label="Radio 1" value="value 1" className="radio1" />
      <RadioInput validations={[required]} name="radio" label="Radio 2" value="value 2" />
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
        label="Job description"
        tooltip="Add here a description of the job position"
        validations={[required]}
        name="exampleWysiwig"
      />
      <SwitchInput name="termsandcond" value="true" label="I accept terms and conditions" validations={[required]} />
      <input type="submit" value="Submit" />
    </Form>
  );
};

export default FormExample;

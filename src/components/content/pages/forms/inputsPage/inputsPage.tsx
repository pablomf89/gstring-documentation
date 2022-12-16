import React, { ReactElement } from "react";
import InputsExample from "./inputs-example";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
export default function InputsPage() {
  return (
    <div className="inner">
      <InputsExample />
      <SyntaxHighlighter language="typescript" style={vs}>
        {
          'import React, { ReactElement } from "react"; \nimport { required } from "../forms/utilities/validations"; \nimport { Form, TextInput, CheckboxInput, RadioInput, SelectInput, TextArea, serializeForm, SelectFilter, SelectFilterOption as Option, SwitchInput } from "../forms"; \nimport Wysiwyg from "../wysiwyg/wysiwyg"; \n \nlet formRef: any = undefined; \nconst handleSubmit = async (event: any) => { \n  const isValid_HTML = event.target.isValid; \n  const values_HTML = serializeForm(event.target); \n  if (isValid_HTML) { \n    console.log(values_HTML); \n  } else { \n    console.log("Form is invalid"); \n  } \n}; \n \nconst handleOnChange = async (event: any) => { \n  const _form = formRef.current as Form; \n  const values_react = _form.serialize();  \n  console.info("Input changed", values_react); \n}; \n \nexport const FormExample: React.FC = (): ReactElement => { \n  formRef = React.createRef(); \n  return ( \n    <Form ref={formRef} onSubmit={handleSubmit} onChange={handleOnChange}> \n      <TextInput validations={[required]} label="Text input" placeholder="enabled" name="textInput" type="text" validateOnChange={true} /> \n      <TextInput validations={[required]} label="Nested props example" placeholder="enabled" name="nestedObject[0].property" type="text" validateOnChange={true} /> \n      <TextArea validations={[required]} label="Textarea" placeholder="example" name="textarea" type="text" /> \n      <SelectInput label="Select" className="" name="myselect" validations={[required]}> <option value="">Select</option> <option value="1">Select value 1</option> \n      </SelectInput> \n      <SelectFilter showSelectAllOption={true} tooltip="tooltip example" label="Select Colour (multiple)" validations={[required]} value={["1", "5"]} multiple={true} name="color"> <Option value="1" label="Red" /> <Option value="2" label="Yellow" /> <Option value="3" label="Orange" /> <Option value="4" label="Pink" /> <Option value="5" label="Purple" /> <Option value="6" label="Blue" /> <Option value="7" label="Grey" /> <Option value="8" label="White" /> <Option value="9" label="Black" /> \n      </SelectFilter> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value1" /> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 1" value="value2" /> \n      <CheckboxInput validations={[required]} name="checkboxName" label="checkbox 2" value="value 3" /> \n      <RadioInput validations={[required]} name="radio" label="Radio 1" value="value 1" className="radio1" /> \n      <RadioInput validations={[required]} name="radio" label="Radio 2" value="value 2" /> \n      <Wysiwyg undo redo headers bold italic strikeThrough justifyCenter justifyLeft justifyRight justifyFull unorderedList orderedList label="Wysiwyg" tooltip="Tooltip example" validations={[required]} name="exampleWysiwig" /> \n      <SwitchInput name="termsandcond" value="true" label="I accept terms and conditions" validations={[required]} /> \n      <input type="submit" value="Submit" /> \n    </Form> \n  ); \n}; \n \nexport default FormExample; \n'
        }
      </SyntaxHighlighter>
    </div>
  );
}

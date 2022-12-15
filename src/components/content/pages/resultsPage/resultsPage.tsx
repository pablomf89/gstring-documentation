import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResultsExample from "./results-example";

export default class ResultsPage extends React.Component {
  render() {
    return (
      <div className="inner">
        <ResultsExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import React from "react"; \nimport { required } from "../forms/utilities/validations"; \nimport Wysiwyg from "../wysiwyg/wysiwyg"; \nexport interface IState { \n  [others: string]: any; \n} \n \nexport default class WysiwygExample extends React.Component<IState> { \n  render() { \n    return ( \n      <div className="row ui-section"> \n        <div className="inner"> \n          <Wysiwyg \n            label="Wysiwyg field example" \n            tooltip="Add here something" \n            validations={[required]} \n            value={"This is an example of a <b>wysiwyg</b> "} \n            name="exampleWysiwig" \n          /> \n        </div> \n      </div> \n    ); \n  } \n} \n'
          }
        </SyntaxHighlighter>
      </div>
    );
  }
}

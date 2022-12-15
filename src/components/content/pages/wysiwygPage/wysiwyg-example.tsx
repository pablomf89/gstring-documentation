import React from "react";
import { required } from "@3ffect/gstring";
import { Wysiwyg } from "@3ffect/gstring";
export interface IState {
  [others: string]: any;
}

export default class WysiwygExample extends React.Component<IState> {
  render() {
    return (
      <div className="row ui-section">
        <div className="inner">
          <Wysiwyg label="Wysiwyg field example" tooltip="Add here something" validations={[required]} value={"This is an example of a <b>wysiwyg</b> "} name="exampleWysiwig" />
        </div>
      </div>
    );
  }
}

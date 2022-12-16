import React from "react";
import ButtonStyles from "components/content/pages/buttonsPage/button-styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

export default class ButtonsPage extends React.Component {
  render() {
    return (
      <>
        <ButtonStyles />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import React, { ReactElement } from "react";\n\nexport const ButtonStyles: React.FC = (): ReactElement => {\n  return (\n    <>\n      <div className="row ui-section">\n        <div className="inner">\n          <p>\n            <a href="#1" className="btn mr10 mb10">\n              Link as button\n            </a>\n            <input type="button" value="Button" className="mr10" />\n            <input type="submit" value="Submit" className="mr10" />\n            <button className="btn mr10 mb10">\n              <i className="fa fa-check"></i> Button with icon\n            </button>\n            <button className="btn mr10 mb10">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <a href="#1" className="btn btn-outline mr10">\n              Outline button\n            </a>\n            <a href="#1" className="btn btn-transparent mr10">\n              Transparent button\n            </a>\n\n            <small>\n              <input type="button" value="Small button mr10" className="" />\n            </small>\n          </p>\n\n          <p>\n            <button className="mr10 btn-success ">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <button className="mr10 btn-success-outline ">\n              <i className="fa fa-check-circle"></i>\n            </button>\n            <button className="mr10 btn-success ">Success Button</button>\n            <button className="mr10 btn-success " disabled>\n              Success Disabled\n            </button>\n            <button className="mr10 btn-success-outline ">\n              Success Outline\n            </button>\n            <button className="mr10 btn-success-outline " disabled>\n              Success Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-warning ">\n              <i className="fa fa-exclamation-circle"></i>\n            </button>\n            <button className="mr10 btn-warning-outline ">\n              <i className="fa fa-exclamation-circle"></i>\n            </button>\n            <button className="mr10 btn-warning ">Warning Button</button>\n            <button className="mr10 btn-warning " disabled>\n              Warning Disabled\n            </button>\n            <button className="mr10 btn-warning-outline ">\n              Warning Outline\n            </button>\n            <button className="mr10 btn-warning-outline " disabled>\n              Warning Disabled\n            </button>\n          </p>\n\n          <p>\n            <button className="mr10 button btn-error ">\n              <i className="fa fa-times-circle"></i>\n            </button>\n            <button className="mr10 button btn-error-outline ">\n              <i className="fa fa-times-circle"></i>\n            </button>\n            <button className="mr10 button btn-error ">Error Button</button>\n            <button className="mr10 button btn-error " disabled>\n              Error Disabled\n            </button>\n            <button className="mr10 btn-error-outline ">Error Outline</button>\n            <button className="mr10 btn-error-outline " disabled>\n              Error Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-info ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-info-outline ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-info ">Info Button</button>\n            <button className="mr10 btn-info " disabled>\n              Info Disabled\n            </button>\n            <button className="mr10 btn-info-outline ">Info Outline</button>\n            <button className="mr10 btn-info-outline " disabled>\n              Info Disabled\n            </button>\n          </p>\n          <p>\n            <button className="mr10 btn-grey ">\n              <i className="fa fa-circle"></i>\n            </button>\n            <button className="mr10 btn-grey-outline ">\n              <i className="fa fa-info-circle"></i>\n            </button>\n            <button className="mr10 btn-grey ">\n              <i className="fa fa-circle"></i> Grey Button\n            </button>\n            <button className="mr10 btn-grey " disabled>\n              Grey Disabled\n            </button>\n            <button className="mr10 btn-grey-outline ">Grey Outline</button>\n            <button className="mr10 btn-grey-outline " disabled>\n              Grey Disabled\n            </button>\n          </p>\n        </div>\n      </div>\n    </>\n  );\n};\n\nexport default ButtonStyles;\n'
          }
        </SyntaxHighlighter>
      </>
    );
  }
}
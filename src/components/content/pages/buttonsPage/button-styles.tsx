import React, { ReactElement } from "react";

export const ButtonStyles: React.FC = (): ReactElement => {
  return (
    <>
      <div className="row ui-section">
        <div className="inner">
          <p>
            <a href="#1" className="btn mr10 mb10">
              Link as button
            </a>
            <input type="button" value="Button" className="mr10 mb10" />
            <input type="submit" value="Submit" className="mr10 mb10" />
            <button className="btn mr10 mb10">
              <i className="fa fa-check"></i> Button with icon
            </button>
            <button className="btn mr10 mb10">
              <i className="fa fa-check-circle"></i>
            </button>
            <a href="#1" className="btn btn-outline mr10 mb10">
              Outline button
            </a>
            <a href="#1" className="btn btn-transparent mr10">
              Transparent button
            </a>

            {/* <small>
              <input type="button" value="Small button mr10" className="" />
            </small> */}
          </p>

          <p>
            <button className="mr10 btn-success mr10 mb10">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="mr10 btn-success-outline mr10 mb10">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="mr10 btn-success mr10 mb10">Success Button</button>
            <button className="mr10 btn-success mr10 mb10" disabled>
              Success Disabled
            </button>
            <button className="mr10 btn-success-outline mr10 mb10">Success Outline</button>
            <button className="mr10 btn-success-outline mr10 mb10" disabled>
              Success Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-warning mr10 mb10">
              <i className="fa fa-exclamation-circle"></i>
            </button>
            <button className="mr10 btn-warning-outline mr10 mb10">
              <i className="fa fa-exclamation-circle"></i>
            </button>
            <button className="mr10 btn-warning mr10 mb10 ">Warning Button</button>
            <button className="mr10 btn-warning mr10 mb10" disabled>
              Warning Disabled
            </button>
            <button className="mr10 btn-warning-outline mr10 mb10">Warning Outline</button>
            <button className="mr10 btn-warning-outline mr10 mb10 " disabled>
              Warning Disabled
            </button>
          </p>

          <p>
            <button className="mr10 button btn-error mr10 mb10">
              <i className="fa fa-times-circle"></i>
            </button>
            <button className="mr10 button btn-error-outline mr10 mb10">
              <i className="fa fa-times-circle"></i>
            </button>
            <button className="mr10 button btn-error mr10 mb10">Error Button</button>
            <button className="mr10 button btn-error mr10 mb10" disabled>
              Error Disabled
            </button>
            <button className="mr10 btn-error-outline mr10 mb10">Error Outline</button>
            <button className="mr10 btn-error-outline mr10 mb10" disabled>
              Error Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-info mr10 mb10">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-info-outline mr10 mb10">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-info mr10 mb10">Info Button</button>
            <button className="mr10 btn-info mr10 mb10" disabled>
              Info Disabled
            </button>
            <button className="mr10 btn-info-outline mr10 mb10">Info Outline</button>
            <button className="mr10 btn-info-outline mr10 mb10" disabled>
              Info Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-grey mr10 mb10">
              <i className="fa fa-circle"></i>
            </button>
            <button className="mr10 btn-grey-outline mr10 mb10">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-grey mr10 mb10">
              <i className="fa fa-circle"></i> Grey Button
            </button>
            <button className="mr10 btn-grey mr10 mb10 " disabled>
              Grey Disabled
            </button>
            <button className="mr10 btn-grey-outline mr10 mb10">Grey Outline</button>
            <button className="mr10 btn-grey-outline mr10 mb10" disabled>
              Grey Disabled
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ButtonStyles;

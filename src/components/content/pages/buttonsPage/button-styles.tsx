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
            <input type="button" value="Button" className="mr10" />
            <input type="submit" value="Submit" className="mr10" />
            <button className="btn mr10 mb10">
              <i className="fa fa-check"></i> Button with icon
            </button>
            <button className="btn mr10 mb10">
              <i className="fa fa-check-circle"></i>
            </button>
            <a href="#1" className="btn btn-outline mr10">
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
            <button className="mr10 btn-success ">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="mr10 btn-success-outline ">
              <i className="fa fa-check-circle"></i>
            </button>
            <button className="mr10 btn-success ">Success Button</button>
            <button className="mr10 btn-success " disabled>
              Success Disabled
            </button>
            <button className="mr10 btn-success-outline ">Success Outline</button>
            <button className="mr10 btn-success-outline " disabled>
              Success Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-warning ">
              <i className="fa fa-exclamation-circle"></i>
            </button>
            <button className="mr10 btn-warning-outline ">
              <i className="fa fa-exclamation-circle"></i>
            </button>
            <button className="mr10 btn-warning ">Warning Button</button>
            <button className="mr10 btn-warning " disabled>
              Warning Disabled
            </button>
            <button className="mr10 btn-warning-outline ">Warning Outline</button>
            <button className="mr10 btn-warning-outline " disabled>
              Warning Disabled
            </button>
          </p>

          <p>
            <button className="mr10 button btn-error ">
              <i className="fa fa-times-circle"></i>
            </button>
            <button className="mr10 button btn-error-outline ">
              <i className="fa fa-times-circle"></i>
            </button>
            <button className="mr10 button btn-error ">Error Button</button>
            <button className="mr10 button btn-error " disabled>
              Error Disabled
            </button>
            <button className="mr10 btn-error-outline ">Error Outline</button>
            <button className="mr10 btn-error-outline " disabled>
              Error Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-info ">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-info-outline ">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-info ">Info Button</button>
            <button className="mr10 btn-info " disabled>
              Info Disabled
            </button>
            <button className="mr10 btn-info-outline ">Info Outline</button>
            <button className="mr10 btn-info-outline " disabled>
              Info Disabled
            </button>
          </p>
          <p>
            <button className="mr10 btn-grey ">
              <i className="fa fa-circle"></i>
            </button>
            <button className="mr10 btn-grey-outline ">
              <i className="fa fa-info-circle"></i>
            </button>
            <button className="mr10 btn-grey ">
              <i className="fa fa-circle"></i> Grey Button
            </button>
            <button className="mr10 btn-grey " disabled>
              Grey Disabled
            </button>
            <button className="mr10 btn-grey-outline ">Grey Outline</button>
            <button className="mr10 btn-grey-outline " disabled>
              Grey Disabled
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default ButtonStyles;

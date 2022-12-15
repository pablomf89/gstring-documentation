import React from "react";

class Spinner extends React.Component {
  render() {
    if (this.props.visible) {
      return (
        <div className="spinner">
          <div className="spinner-content">
            <i className="icon fa fa-spinner  fa-spin"></i>
            {this.props.message && <p>{this.props.message}</p>}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Spinner;

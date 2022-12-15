import React from "react";
import { Modal } from "@3ffect/gstring";
export interface IState {
  openDefault?: boolean;
  [others: string]: any;
}
export default class ModalExample extends React.Component<IState> {
  state: Readonly<IState> = {
    openDefault: false,
  };

  changeOpenDefaultModal = (bool: boolean) => {
    this.setState({ openDefault: bool });
  };
  render() {
    return (
      <>
        <input
          type="button"
          value="Open Default Modal"
          onClick={() => {
            this.changeOpenDefaultModal(true);
          }}
        />
        <Modal
          open={this.state.openDefault}
          close={() => {
            this.changeOpenDefaultModal(false);
          }}
        >
          <div className="modal-header">Default Modal</div>
          <div className="modal-body">
            <h4>Lorem ipsum</h4>
            <h5>Euismod tristique</h5>
            <p>
              Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu
              aliquam elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec
              suscipit lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem
              tempor pretium.
            </p>
            Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam
            elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit
            lacus. Praesent vel ipsum vulputate, gravida augue vel, pulvinar mauris. Nulla facilisi. Fusce malesuada lectus vel nisl imperdiet porta. Proin ac nisi ex. Mauris vestibulum augue facilisis lorem tempor
            pretium.
            <hr className="mb20 mt20" />
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <hr className="mb20 mt20" />
            Aliquam imperdiet est vitae euismod tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam felis orci, fringilla a urna ut, ornare consequat augue. Mauris sollicitudin tortor eu aliquam
            elementum. Suspendisse potenti. Sed dapibus ullamcorper ipsum, at mollis lacus pellentesque ac. Nullam sit amet enim sed urna lobortis consectetur. Sed nec enim nunc. Aenean ac tempor turpis, nec suscipit
            lacus.
          </div>
          <div className="modal-footer">
            <button
              className="m0"
              onClick={() => {
                this.changeOpenDefaultModal(false);
              }}
            >
              Cancel
            </button>
          </div>
        </Modal>
      </>
    );
  }
}

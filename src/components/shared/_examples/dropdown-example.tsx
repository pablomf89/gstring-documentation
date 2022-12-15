import React from "react";
import LoadingMessage from "@3ffect/gstring";
import { Dropdown, DropdownMenu, DropdownButton } from "@3ffect/gstring";

export interface IState {
  [others: string]: any;
}

export default class DropdownExample extends React.Component<IState> {
  render() {
    return (
      <div className="row ui-section">
        <div className="box-12">
          <h3 className="title">Dropdown</h3>
        </div>
        <div className="box-12">
          <Dropdown>
            <DropdownButton className="btn">Menu dropdown</DropdownButton>
            <DropdownMenu>
              <ul className="m-0">
                <li className="dropdown-item">
                  <a href="#dropdown">Item 1</a>
                </li>
                <li className="dropdown-item">
                  <a href="#dropdown">Item 2</a>
                </li>
                <li className="dropdown-item">
                  <a href="#dropdown">Item 3</a>
                </li>
                <li className="dropdown-item">
                  <a href="#dropdown">Item 4</a>
                </li>
              </ul>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    );
  }
}

import React from "react";
import { Pagination } from "@3ffect/gstring";

export default class PaginationExample extends React.Component {
  state = {
    totalRecords: 50,
    currentPage: 1,
    itemPerPage: 10,
    skip: 0,
    take: 10,
  };

  onClickPage = (page: number, skip: any, take: any) => {
    this.setState({ currentPage: page, skip: skip, take: take });
  };

  changeItemsPerPage = (num: any) => {
    const numItemPerPage = parseInt(num, 10);
    this.setState({ itemPerPage: numItemPerPage, take: numItemPerPage });
  };

  changeTotal = (e: any) => {
    let totalRecords = parseInt(e.target.value, 10);
    this.setState({ totalRecords: totalRecords });
  };
  render() {
    return (
      <div className="row ui-section">
        <div className="box-12">
          <h3 className="title">Pagination</h3>
        </div>
        <div className="box-12">
          <div>
            <label className="mr-1">
              <b>Total Items</b> {this.state.totalRecords}
            </label>
            <input type="range" min="1" max="100" onChange={this.changeTotal} value={this.state.totalRecords} />
            &nbsp;
            <label>
              <b>Skip Items :</b> {this.state.skip}{" "}
            </label>
            &nbsp;
            <label>
              <b>Take Items :</b> {this.state.take}
            </label>
          </div>
          <br />

          <Pagination
            totalRecords={this.state.totalRecords}
            currentPage={this.state.currentPage}
            itemPerPage={this.state.itemPerPage}
            onClickPage={this.onClickPage}
            changeItemsPerPage={this.changeItemsPerPage}
            itemsPerPageOptions={[1, 5, 10, 20, 50]}
          />
        </div>
      </div>
    );
  }
}

import { Component } from "react";
import { SelectInput } from "@3ffect/gstring";
import { Results } from "@3ffect/gstring";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { mockAPICall } from "./results-example-service";

const columnsExample = [
  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },
  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },
  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },
  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },
];

class ResultsExample extends Component<RouteComponentProps> {
  fetchData = async (filters: any) => {
    return await mockAPICall(filters);
  };

  render() {
    return (
      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">
        <h3 className="hero mb2">Results</h3>
        {/* Please check the results PROPS interface for extra options. */}
        <Results reactRouterHistory={this.props.history} clientFiltering={false} filterOnChange={true} columns={columnsExample} itemsPerPage={[2, 5, 10]} defaultColumns={columnsExample} fetchResults={this.fetchData}>
          {/* In this area you can add anything you want, it will appear on top of the table.
          If you add form INPUTS theyll be automatically serialize and sent to fetchResults function as the filters. */}
          <SelectInput label="Sample category filter" name="categoryId">
            <option value="">Select a category</option>
            <option value="Ipsum">Ipsum</option>
            <option value="Lorem">Lorem</option>
            <option value="Dolor">Dolor</option>
          </SelectInput>
        </Results>
      </div>
    );
  }
}

export default withRouter(ResultsExample);

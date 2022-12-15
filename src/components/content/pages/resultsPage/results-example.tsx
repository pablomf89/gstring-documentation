import React, { Component } from "react";
import { SelectInput } from "@3ffect/gstring";
import { Results } from "@3ffect/gstring";

const columnsExample = [
  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },
  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },
  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },
  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },
];

class ResultsExample extends Component<any> {
  fetchData = async (filters: any) => {
    //in this function you'd usually call the backend to retrieve some data and pass the filters and the shortby
    const _mock_data = [
      { title: "result 1", categoryId: "Ipsum", createdByUser: "Pablo Martín", createdOn: "01/01/2022" },
      { title: "result 2", categoryId: "Ipsum", createdByUser: "John Snow", createdOn: "02/01/2022" },
      { title: "result 3", categoryId: "Ipsum", createdByUser: "Frodo", createdOn: "03/01/2022" },
      { title: "result 4", categoryId: "Lorem", createdByUser: "El Risitas", createdOn: "04/01/2022" },
      { title: "result 5", categoryId: "Dolor", createdByUser: "La Veneno", createdOn: "05/01/2022" },
    ];
    //here we're just mocking a simple category filter
    const data = _mock_data.filter((item) => !filters.categoryId || item.categoryId === filters.categoryId);
    //this would be the response from the backend
    return {
      count: data.length,
      data: data,
    };
  };

  render() {
    return (
      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">
        <h3 className="hero mb2">Results</h3>
        {/* Please check the results PROPS interface for extra options. */}
        <Results clientFiltering={false} filterOnChange={true} columns={columnsExample} defaultColumns={columnsExample} fetchResults={this.fetchData}>
          {/* In this area you can add anything you want, it will appear on top of the table.
          If you add form INPUTS they'll be automatically serialize and sent to fetchResults function as the filters. */}
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

export default ResultsExample;

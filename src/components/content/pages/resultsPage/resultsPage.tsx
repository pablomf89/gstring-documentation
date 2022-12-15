import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";
import ResultsExample from "./results-example";

export default class ResultsPage extends React.Component {
  render() {
    return (
      <div className="inner">
        <ResultsExample />
        <SyntaxHighlighter language="typescript" style={vs}>
          {
            'import { Component } from "react";\nimport { SelectInput } from "@3ffect/gstring";\nimport { Results } from "@3ffect/gstring";\nimport { RouteComponentProps, withRouter } from "react-router-dom";\nimport { mockAPICall } from "./results-example-service";\n\nconst columnsExample = [\n  { title: "Name", columnKey: "title", sortable: true, filterOptions: [] },\n  { title: "Category", columnKey: "categoryId", sortable: true, filterOptions: [] },\n  { title: "Created by", columnKey: "createdByUser", sortable: true, filterOptions: [], type: "object" },\n  { title: "Created on", columnKey: "createdOn", sortable: true, filterOptions: [], type: "date" },\n];\n\nclass ResultsExample extends Component<RouteComponentProps> {\n  fetchData = async (filters: any) => {\n    return await mockAPICall(filters);\n  };\n\n  render() {\n    return (\n      <div className="g-item_16 g-item-tablet_8 g-item-mobile_4 mb8">\n        <h3 className="hero mb2">Results</h3>\n        {/* Please check the results PROPS interface for extra options. */}\n        <Results reactRouterHistory={this.props.history} clientFiltering={false} filterOnChange={true} columns={columnsExample} itemsPerPage={[2, 5, 10]} defaultColumns={columnsExample} fetchResults={this.fetchData}>\n          {/* In this area you can add anything you want, it will appear on top of the table.\n          If you add form INPUTS theyll be automatically serialize and sent to fetchResults function as the filters. */}\n          <SelectInput label="Sample category filter" name="categoryId">\n            <option value="">Select a category</option>\n            <option value="Ipsum">Ipsum</option>\n            <option value="Lorem">Lorem</option>\n            <option value="Dolor">Dolor</option>\n          </SelectInput>\n        </Results>\n      </div>\n    );\n  }\n}\n\nexport default withRouter(ResultsExample);\n'
          }
        </SyntaxHighlighter>
      </div>
    );
  }
}

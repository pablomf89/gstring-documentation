import React, { Component } from "react";
import Sortable from "components/shared/sortable/Sortable";
import SortableItem from "components/shared/sortable/SortableItem";

/** Example multiple sortable */
export default class ExampleSortableDivs extends Component {
  render() {
    return (
      <>
        <div style={{ position: "relative", zIndex: "1" }}>
          <Sortable sortResult={() => {}}>
            <>
              <SortableItem id="1">
                <div key="1" className="notification notification-loading">
                  Item 1
                </div>
                <SortableItem id="2">
                  <div key="2" className="notification notification-loading">
                    Item 2
                  </div>
                </SortableItem>
                <SortableItem id="2">
                  <div key="2" className="notification notification-loading">
                    Item 2
                  </div>
                </SortableItem>
              </SortableItem>
              <SortableItem id="2">
                <div key="2" className="notification notification-loading">
                  Item 2
                </div>
              </SortableItem>
              <SortableItem id="3">
                <div key="3" className="notification notification-loading">
                  Item 3
                </div>
              </SortableItem>
            </>
            <>
              <SortableItem id="4">
                <div key="1" className="notification notification-loading">
                  Item 1
                </div>
              </SortableItem>
              <SortableItem id="5">
                <div key="2" className="notification notification-loading">
                  Item 2
                </div>
              </SortableItem>
              <SortableItem id="6">
                <div key="3" className="notification notification-loading">
                  Item 3
                </div>
              </SortableItem>
            </>
          </Sortable>
        </div>
      </>
    );
  }
}

import React from "react";
/*styles*/
import "@3ffect/gstring/assets/styles/main.scss";
// import "assets/styles/main.scss";
/*components*/
import Router from "components/master/router/Router.Main";
import { getBrowserDetails } from "utilities/tracking/browserDetection";

import Sidebar from "components/master/sidebar/sidebar";
import { NavContext } from "components/master/context/navigation/Navigation";
import NotificationsContainer from "components/master/context/notifications/notifications-container";
class App extends React.Component {
  render() {
    const browser = getBrowserDetails();
    const browserName = browser.browser ? browser.browser : "default";
    const browserVersion = browser.browserMajorVersion ? browser.browserMajorVersion : "default";

    return (
      <>
        <div className="container-wrapper" data-browser={browserName} data-version={browserVersion}>
          <div className="container ">
            <div className="global-wrapper">
              <Sidebar />
              <div className="box-10 main-area js-dashboard">
                <div className="header">
                  <div className="box-mobile-12" style={{ flex: "1 1 0%" }}>
                    <div className="inner mb0 mt0 pb0">
                      <ul className="list-inline  p10">
                        <li className="h5">{this.context.currentPage?.N}</li>
                      </ul>
                    </div>
                  </div>

                  <div className="clearfix" />
                </div>
                <div className="p10 mt20">
                  <Router />
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <NotificationsContainer />
      </>
    );
  }
}
App.contextType = NavContext;

export default App;

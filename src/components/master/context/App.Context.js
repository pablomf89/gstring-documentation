import React, { Component } from "react";
import Navigation from "./navigation/Navigation";
//import Spinner from "../spinner";

export const AppContext = React.createContext({});

class AppContextHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      isAuth: false,
    };

  }

  renderPage = () => {
      return (
        <Navigation>
          <> {this.props.children} </>
        </Navigation>
      );
  };

 


  render() {
    return <AppContext.Provider value={this.state}>{this.renderPage()}</AppContext.Provider>;
  }
}

export default AppContextHandler;

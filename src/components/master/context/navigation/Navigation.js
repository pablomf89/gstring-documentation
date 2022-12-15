import React from "react";
import { withRouter } from "react-router-dom";

import { fetchPages } from "../../router/Navigation.Services";
import { getCurrentPage } from "../../../../utilities/url";
import Spinner from "components/master/spinner";

export const NavContext = React.createContext({});
class Navigation extends React.Component {
  state = { pages: null, currentPage: null };

  componentDidMount() {
    this._isMounted = true;
    this.getPages();
    this.props.history.listen((location) => {
      this.updateNavState(this.state.pages);
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    if (JSON.stringify(this.props.location) !== JSON.stringify(prevProps.location) || JSON.stringify(this.state.pages) !== JSON.stringify(prevState.pages)) {
      this.updateNavState(this.state.pages);
    }
  }

  async getPages() {
    const pages = await fetchPages();
    this.updateNavState(pages);
  }

  async updateNavState(pages) {
    if (this._isMounted) {
      let currentPage = getCurrentPage(pages);
      const newState = { pages: pages, currentPage: currentPage };
      if (JSON.stringify(newState) !== JSON.stringify(this.state)) {
        this.setState(newState);
      }
    }
  }

  render() {
    if (this.state.currentPage) {
      const context = { ...this.state };
      return (
        <NavContext.Provider value={context}>
          <> {this.props.children} </>
        </NavContext.Provider>
      );
    } else {
      return <Spinner visible={true} message={"Loading navigation..."} />;
    }
  }
}

export default withRouter(Navigation);

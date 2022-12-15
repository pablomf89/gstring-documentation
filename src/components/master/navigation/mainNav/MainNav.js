import { Component } from "react";
import NavItem from "./NavItem";
 
import { NavContext } from "components/master/context/navigation/Navigation";
import { withRouter } from "react-router-dom";
import { getMainNavItems } from "components/master/router/Navigation.Services";
class MainNav extends Component {
  state = {
    navSections: undefined,
    currentNode: undefined,
    open: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      navSections: undefined,
      currentNode: undefined,
      open: false,
      developerMode: false,
    }; 
  }

  getNavState = async () => {
    let navSections = await getMainNavItems();
    this.setState({ navSections: navSections, currentNode: this.context.currentPage });
  };

  componentDidMount() {
    this.getNavState();
  }

  togglenav() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <>
        <button className="nav-toggle-button" type={"button"} onClick={() => this.togglenav()}>
          <i className="fa fa-bars"></i>
        </button>
        <div className={`tree-nav-wrapper ${this.state.open ? "open" : ""}`}>
          
            {this.state.navSections && this.state.navSections.length ? (
              this.state.navSections.map((navItem, i) => {
            
                    return (
                      <div className="menu-item js-accordion" id={navItem?.id} data-order={i}>
                        <NavItem                         
                          preloadChildren={true}
                          key={navItem.id}
                          navItem={navItem}
                          nodeId={navItem?.id}
                          currentNode={this.context.currentNode}
                          currentNodeAncestors={this.props.currentNodeAncestors}
                        />
                      </div>
                    );
              })
            ) : (
              <div className="menu-item">
                <span className="menu-link">
                  <i className="icon fa fa-spinner fa-spin"></i> Loading...
                </span>
              </div>
            )}
 
        </div>
      </>
    );
  }
}

MainNav.contextType = NavContext;
export default withRouter(MainNav);

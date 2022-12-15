import { Component } from "react";
import { Link } from "react-router-dom";
import { NavContext } from "components/master/context/navigation/Navigation";
import { getMainNavChildrenItems, getMainNavItems, navIsActive } from "components/master/router/Navigation.Services";

class NavItem extends Component {
  state = {
    active: undefined,
    open: undefined,
    navItems: undefined,
  };

  constructor(props) {
    super(props);

    this.state = {
      active: undefined,
      open: undefined,
      navItems: undefined,
    };
  }

  openSection = async () => {
    const open = this.state.open ? !this.state.open : true;
    this.setState({ open: open });
  };

  getChildrenNodes = async () => {
    //if (!this.state.navItems) {
    const navItems = await getMainNavChildrenItems(this.props.currentNode);
    this.setState({ navItems: navItems });
    //}
  };

  componentDidMount = () => {
    this.processStatus();
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open || JSON.stringify(prevProps) !== JSON.stringify(this.props)) {
      this.processStatus();
    }
  };

  processStatus = async () => {
    const active = navIsActive(this.props.navItem, this.props.currentNode, this.props.currentNodeAncestors);

    if (active || this.state.open || this.props.preloadChildren) {
      await this.getChildrenNodes();

      if (active) {
        const open = typeof this.state.open === "undefined" ? true : this.state.open;
        this.setState({ active: active, open: open });
      }
    }
  };

  render() {
    const active = navIsActive(this.props.navItem, this.props.currentPage, this.props.currentNodeAncestors);
    const isCurrentNav = this.props.navItem?.id === this.props.currentPage?.id;
    const openSubMenu = this.state.open || (typeof this.state.open === undefined && active) || this.props.forceOpen;
    const _nodeItem = this.props?.navItem?.id === this.props.currentPage?.id ? this.props?.currentPage : this.props?.navItem;

    return (
      <>
        <span className={`menu-item-icon  ${active && "active"} ${isCurrentNav && "current-nav"} fa  ${_nodeItem?.definitionIcon}`}></span>

        <Link onClick={() => document.getElementsByClassName("main-area")[0].scroll({ top: 0, behavior: "smooth" })} className={`menu-link ${active && "active"} ${isCurrentNav && "current-nav"}`} to={_nodeItem?.url}>
          {_nodeItem?.N}
        </Link>

        {this.state.navItems && this.state.navItems.length ? (
          <>
            <span title="Expand submenu" onClick={() => this.openSection()} className={`indicator js-submenu-indicator ${openSubMenu && "active"}`}>
              <span className={openSubMenu ? "fa fa-angle-up" : "fa fa-angle-down"}></span>
            </span>
            <div className={`sub-menu js-submenu  ${!openSubMenu && "hidden"}`}>
              {this.state.navItems &&
                this.state.navItems.length &&
                this.state.navItems.map((navItem, i) => {
                  return <NavItem preloadChildren={openSubMenu} key={navItem.id} navItem={navItem} currentNode={this.props.currentNode} currentNodeAncestors={this.props.currentNodeAncestors} />;
                })}
            </div>
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

NavItem.contextType = NavContext;
export default NavItem;

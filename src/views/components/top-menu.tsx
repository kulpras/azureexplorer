import * as React from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap";
import { appContextStore } from "./../../stores";
import { Icon } from "./../components";
import { observer } from "mobx-react";

@observer
export class TopMenu extends React.Component {
  toggleSidebar = () => {
    appContextStore.toggleSidebar();
  }

  render() {
    return (
      <Navbar color="faded" expand="md">
        <Icon
          onClick={this.toggleSidebar}
          iconName="fa-bars" />
        &nbsp;Menu
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/home/help">Help</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/kulpras/azureexplorer">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

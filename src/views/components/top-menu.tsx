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
        &nbsp;Typo
        <NavbarToggler />
        <Collapse isOpen={true} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
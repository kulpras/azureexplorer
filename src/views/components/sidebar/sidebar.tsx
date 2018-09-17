import * as React from "react";
import "./sidebar.css";
import { NavItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Icon } from "..";

const navs = {
  ServiceBus: {
    title: "Service Bus",
    to: "/home/ServiceBus",
    icon: "fa-star"
  },
  help: {
    title: "Help",
    to: "/home/help",
    icon: "fa-folder"
  }
};

export class Sidebar extends React.Component {
  render() {
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {Object.keys(navs).map((key) => {
            const navItem = navs[key];
            return <NavItem key={navItem.to}>
              <Link to={navItem.to}><Icon iconName={navItem.icon} />{navItem.title}</Link>
            </NavItem>;
          })}
        </ul>
      </div>
    );
  }
}

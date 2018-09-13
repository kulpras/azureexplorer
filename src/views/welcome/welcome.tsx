import * as React from "react";
import { Button } from "reactstrap";
import "./welcome.css";

export class Welcome extends React.Component {
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1>Simple Sidebar</h1>
          <p>This template has a responsive menu toggling system. The menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will appear/disappear. On small screens, the page content will be pushed off canvas.</p>
          <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>.</p>
          <Button color="primary" id="menu-toggle">This is a button</Button>
        </div>
      </div>
    );
  }
}
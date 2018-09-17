import * as React from "react";
import "./help.css";

export class Help extends React.Component {
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1>Help</h1>
          <p>This page is for help</p>
          <p><code>npm install</code>.</p>
        </div>
      </div>
    );
  }
}

import * as React from "react";
import { Input, Label } from "reactstrap";
import { loggerStore } from "../../stores";
import { observer } from "mobx-react";
import "./logger.css";

@observer
export class Logger extends React.Component {
toggleLogger = () => {
 loggerStore.toggle();
}
  render() {

    return (
 <div id="page-content-wrapper">
  <div className="container-fluid">
   <Label check>
    <Input type="checkbox" id="showLogs" onChange={this.toggleLogger} /> Show Logs.
   </Label>
  </div>
  <div id="bottom-wrapper" className={loggerStore.visible ? "inlineLogs" : "hiddenLogs"}>
   <textarea id="logs" cols={100} rows={10} className="zeroBorder" readOnly={true} />
  </div>
  </div>
    );
  }
}

import * as React from "react";
import { Input, Label, Button } from "reactstrap";
import { loggerStore } from "../../stores";
import { observer } from "mobx-react";
import "./logger.css";

@observer
export class Logger extends React.Component {
constructor(props: any) {
super(props);
loggerStore.log("Init");
}
 toggleLogger = () => {
loggerStore.toggle();
loggerStore.log("toggled.");
 }

 clearLogs = () => {
 loggerStore.clearLogs();
 }
 render() {
  return (
   <div id="page-content-wrapper">
    <div className="container-fluid">
     <Label check>
      <Input type="checkbox" id="showLogs" onChange={this.toggleLogger} /> Show Logs
     </Label>{" "}
    <Button color="primary" className={loggerStore.visible ? " btn btn-sm inlineLogs" : "btn btn-sm hiddenLogs"} onClick={this.clearLogs}>Clear Logs</Button>
    </div>
    <div id="bottom-wrapper" className={loggerStore.visible ? "inlineLogs" : "hiddenLogs"}>
     <textarea id="logs" cols={100} rows={10} className="zeroBorder" readOnly={true} value={loggerStore.logMessage} />
    </div>
   </div>
  );
 }
}

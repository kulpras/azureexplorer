import * as React from "react";
import { Button, Input, Table } from "reactstrap";
import "./servicebus.css";
import { Logger } from "../logger/logger";
import { loggerStore } from "../../stores";
import { serviceBusContextStore } from "../../stores";

export class ServiceBus extends React.Component {
  connectionString : string = "";
  handleChange = (event : any) => {
    this.connectionString = event.target.value; 
  }
    connect = () => {
      loggerStore.log("Connecting to sbq...");
      serviceBusContextStore.connect(this.connectionString);
      }
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h3>Azure Service Bus Explorer</h3>
          <p><Input type="text" name="connectionString" id="connectionString" placeholder="enter connection string" onChange={this.handleChange} /></p>
          <Button color="primary" className="btn btn-primary" onClick={this.connect}>Connect</Button>
          <Button color="primary" className="btn btn-primary" onClick={serviceBusContextStore.getQueue}>LIST</Button>
        </div>
        <div className="container-fluid">
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Queue Name</th>
                <th># of Messages</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Queue 1</td>
                <td>1</td>
                <td><a href="#">Refresh</a></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Queue 2</td>
                <td>2</td>
                <td><a href="#">Refresh</a></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Queue 3</td>
                <td>3</td>
                <td><a href="#">Refresh</a></td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="container-fluid">
          <Logger />
        </div>
      </div >
    );
  }
}

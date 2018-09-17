import * as React from "react";
import { Button, Input, Table } from "reactstrap";
import "./servicebus.css";

export class ServiceBus extends React.Component {
  render() {
    return (
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h3>Azure Service Bus Explorer</h3>
          <p>Something.....</p>
          <code>Connection String : </code>
          <p><Input type="text" name="connectionString" id="connectionString" /></p>
          <Button color="primary" className="btn btn-primary">Connect</Button>
        </div>
        <div className="container-fluid">
        <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
        </div>
        <div id="bottom-wrapper">
          <textarea id="logs" cols={100} rows={10} className="zeroBorder" />
        </div>
      </div>
    );
  }
}

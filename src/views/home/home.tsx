import * as React from "react";
import { TopMenu, Sidebar } from "../components";
import { Route, Switch } from "react-router-dom";
import { appContextStore } from "./../../stores";
import { observer } from "mobx-react";
import { Welcome } from "../welcome/welcome";
import { Explore } from "../explore/explore";
import { Installed } from "../installed-fonts/installed";

const classNames = require("classnames");

@observer
export class Home extends React.Component {

  constructor(props: any) {
    super(props);
    this.state = {
      sidebarToggledClassName: false
    };
  }

  render() {
    return (
      <div>
        <TopMenu />
        <div id="wrapper" className={classNames({
          "toggled": appContextStore.sidebarVisible
        })}>
          <Sidebar />
          <Switch>
            <Route exact path="/home" component={Welcome} />
            <Route exact path="/home/explore" component={Explore} />
            <Route exact path="/home/installed" component={Installed} />
          </Switch>
        </div>
      </div>
    );
  }
}
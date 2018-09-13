import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/css/font-awesome.min.css";
import "./fonts/fonts/fontawesome-webfont.woff2";
import { Route } from "react-router-dom";
import { SignIn } from "./views/login/signin";
import { Home } from "./views/home/home";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/login" component={SignIn} />
        <Route path="/home" component={Home} />
      </div>
    );
  }
}

export default App;

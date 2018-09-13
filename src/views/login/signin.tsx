import * as React from "react";
import "./signin.css";
import { Button, Input, Form } from "reactstrap";

interface SignInProps {
  history: any;
  [key: string]: any;
}

export class SignIn extends React.Component<SignInProps> {
  render() {
    const { history } = this.props;
    return (
      <div className="text-center">
        <Form className="form-signin">
          <img className="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label className="sr-only">Email address</label>
          <Input type="email" id="inputEmail" className="form-control" placeholder="Email address" />
          <label className="sr-only">Password</label>
          <Input type="password" id="inputPassword" className="form-control" placeholder="Password" />
          <div className="checkbox mb-3">
            <label>
              <Input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <Button color="primary" className="btn btn-lg btn-primary btn-block" type="submit" onClick={() => history.push("/home")}>
            Sign In
          </Button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
        </Form>
      </div>
    );
  }
}
import * as React from "react";
import { Nav, Card, CardImg, CardTitle, CardSubtitle, CardBody, CardText, Button, NavItem, NavLink, Input } from "reactstrap";
import "./dashboard.css";

const navItems = [
  {
    link: "home",
    text: "Home",
    icon: "fa-home"
  },
  {
    link: "link2",
    text: "Clone",
    icon: "fa-clone"
  },
  {
    link: "link3",
    text: "Fighter",
    icon: "fa-fighter-jet"
  }
];

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
          <Input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
          <Nav className="my-2 my-md-0 mr-md-3 flex-md-nowrap p-0">
            {navItems.map((navItem) => {
              return <NavItem key={navItem.link}>
                <NavLink className="p-2 text-light" href="#">{navItem.text}</NavLink>
              </NavItem>;
            })
            }
          </Nav>
        </nav>

        <div className="container-fluid">
          <div className="row">
            <Nav className="col-md-2 d-none d-md-block bg-light sidebar sidebar-sticky">
              <Nav vertical>
                {navItems.map((navItem) => {
                  return <NavItem key={navItem.link}>
                    <NavLink href="#"><i className={`fa ${navItem.icon} fa-fw`} aria-hidden="true" />&nbsp; {navItem.text}</NavLink>
                  </NavItem>;
                })
                }
              </Nav>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a className="d-flex align-items-center text-muted" href="#">
                  <i className="fa fa-plus-circle" />
                </a>
              </h6>
              <Nav vertical>
                {navItems.map((navItem) => {
                  return <NavItem key={navItem.link}>
                    <NavLink href="#"><i aria-hidden="true" />&nbsp; {navItem.text}</NavLink>
                  </NavItem>;
                })
                }
              </Nav>
            </Nav>

            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button className="btn btn-sm btn-outline-secondary">Share</button>
                    <button className="btn btn-sm btn-outline-secondary">Export</button>
                  </div>
                  <button className="btn btn-sm btn-outline-secondary dropdown-toggle">
                    <span data-feather="calendar" />
                    This week
              </button>
                </div>
              </div>
              <Card style={{
                width: 250,
              }}>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Button>Button</Button>
                </CardBody>
              </Card>
            </main>
          </div>
        </div>
      </div >
    );
  }
}
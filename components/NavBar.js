import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: this.props.isLoggedIn
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  isLoggedIn(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
      const navOne = (
        <NavItem>
          <NavLink href="/userprofile">Profile</NavLink>
        </NavItem>
      );
      const navTwo = (
        <NavItem>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </NavItem>
      );
      const navThree = (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Services
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem href="/jobboard">Job Postings</DropdownItem>
            <DropdownItem href="/findsitter">Find a Sitter</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/">Logout</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      );
      return (
        <>
          {navOne}
          {navTwo}
          {navThree}
        </>
      );
    } else {
      const navOne = (
        <NavItem>
          <NavLink href="/login">Login</NavLink>
        </NavItem>
      );
      const navTwo = (
        <NavItem>
          <NavLink href="/register">Register</NavLink>
        </NavItem>
      );
      return (
        <>
          {navOne}
          {navTwo}
        </>
      );
    }
  }
  
  render() {
    return (
      <div>
        <Navbar className="coloring" dark expand="md">
          <NavbarBrand href="/">
            <i style={{ margin: "5%" }} className="fa fa-paw" />
            Tempeturs
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {this.isLoggedIn(this.state)}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

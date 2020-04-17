import React, { Component } from 'react';
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
    DropdownItem,
    NavbarText
  } from 'reactstrap';


export default class Navigation extends Component {
    render() {
        return (
        
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">BookShelf</NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/components/">Software</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">Historia</NavLink>
                  </NavItem>
                  </Nav>
                <NavbarText>Crear Libro</NavbarText>
              </Collapse>
            </Navbar>
          </div>

        )
    }
}

  
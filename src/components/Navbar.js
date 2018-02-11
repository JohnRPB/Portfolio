
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
  Checkbox
} from 'semantic-ui-react'
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  NavLink
} from "react-router-dom";
import '../css/index.css';

const Navbar = () => {
  return (
    <Menu
      fixed={true ? 'top' : null}
      inverted={true}
      size='large'
    >
      <Container>
        <NavLink exact to="/" className="item">
          Home
        </NavLink>
        <NavLink exact to="/about" className="item">
          About
        </NavLink>
        <NavLink exact to="/portfolio" className="item">
          Portfolio
        </NavLink>
        <NavLink exact to="/contact" className="item">
          Contact
        </NavLink>
      </Container>
    </Menu>
  )
}

export default Navbar;

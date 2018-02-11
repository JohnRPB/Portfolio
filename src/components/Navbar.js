
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
import '../index.css';

const Navbar = () => {
  return (
    <Menu
      fixed={true ? 'top' : null}
      inverted={true}
      size='large'
    >
      <Container>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item as='a'>About</Menu.Item>
        <Menu.Item as='a'>Portfolio</Menu.Item>
        <Menu.Item as='a'>Contact</Menu.Item>
      </Container>
    </Menu>
  )
}

export default Navbar;

import React, { Component } from 'react';
import '../../css/App.css';
import Navbar from '../Navbar';
import HomePage from '../Home/HomePage';
import Routes from '../../routes';
import ResponsiveContainer from './ResponsiveContainer';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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

class App extends Component {
  render() {
    return (
    <Router>
      <ResponsiveContainer>
        <Routes />
      </ResponsiveContainer>
    </Router>
    );
  }
}

export default App;

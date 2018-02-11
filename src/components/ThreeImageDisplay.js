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
import '../css/index.css';
import cumDev from '../quantile-plot2.jpg';
import table from '../widget-1-302x182.jpg';
import server from '../server1.png';
import ThreeImageCSS from '../css/ThreeImageDisplay.css';


const ThreeImageDisplay = () => {
  return (
    <div style={{position:"relative"}}>
      <img id="cum-dev" src={cumDev} width="300px" style={{borderRadius:"5px"}} />
      <img id="table" src={table} width="300px" style={{borderRadius:"5px"}} />
      <img id="server" src={server} width="300px" style={{borderRadius:"5px"}} />
    </div>
  )
}

export default ThreeImageDisplay;

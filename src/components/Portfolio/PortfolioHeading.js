import PropTypes from 'prop-types';
import React, {Component} from 'react';
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
  Checkbox,
} from 'semantic-ui-react';
import '../../css/Portfolio.css';

const AboutPageHeading = ({mobile}) => (
  <Segment
    inverted
    textAlign="center"
    style={{minHeight: 370, padding: '1em 0em'}}
    vertical
    className="about-heading">
    <Container className="about-heading" text>
      <Header
        as="h4"
        content="Johann Baptista"
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '2em' : '4.2em',
        }}
      />
      <Divider inverted />
      <Header
        as="h4"
        content="Portfolio"
        inverted
        style={{
          fontSize: mobile ? '.5em' : '1.5em',
          fontWeight: 'normal',
          marginBottom: 0,
        }}
      />
    </Container>
  </Segment>
);

AboutPageHeading.propTypes = {
  mobile: PropTypes.bool,
};

export default AboutPageHeading;

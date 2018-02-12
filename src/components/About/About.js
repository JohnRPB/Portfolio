import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'

const AboutPage = () => (
    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Coding is how I explore the world</Header>
      <p style={{fontSize:"20px"}}>&#8212; whether that world is of 
      data, ideas, or people. In college, while pursuing a physics 
      degree, I became aware of the ubiquity and power of 
      programming, and gravitated towards coding in my spare time, 
      using R to answer questions and settle debates. Over time, I 
      began to build applications and take classes in computer 
      science, and fell in love with the elegance of code. 
      </p>
      <p style={{fontSize:"20px"}}>
      Today, I enjoy contributing to open source, and putting my 
      efforts into projecs that I'm passionate about in science and 
      technology, including an effort to fast-track the publication
      of scientific reviews through interactive data analysis and
      putting together an integrated api for exploring historical 
      census data.
      </p>

      {/* Mysteries of CSS --- apparently this segment is needed 
      to get the footer to stick to the bottom of the page */}
      <Segment style={{ padding: '4.5em 0em' }} vertical />
    </Container>
)

export default AboutPage; 

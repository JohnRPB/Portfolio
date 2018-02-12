import React from 'react';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
} from 'semantic-ui-react';

// Import models
import portfolioModels from '../../models/portfolio.json';

// Import PortfolioItem component
import PortfolioItem from './PortfolioItem';

const PortfolioPage = () => {
  return (
    <Container text style={{marginTop: '5em', width:"2000px"}}>

      <Container className="models-container">

       <h2>Welcome to my portfolio</h2>
       <br />

      {portfolioModels.map((item, idx) => {
        return <PortfolioItem model={item} />;
      })}
      </Container>

      {/* Mysteries of CSS --- apparently this segment is needed 
      to get the footer to stick to the bottom of the page */}
      <Segment style={{padding: '4.5em 0em'}} vertical />
    </Container>
  );
};

export default PortfolioPage;

import React from 'react'
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
  Checkbox,
} from 'semantic-ui-react'

const PortfolioItem = ({model}) => {
  return (
    <Segment style={{height:"300px", display:"flex", flexDirection:"row"}}>
    <Container>
      <Header>
        {model.title}
      </Header>
      <Container>
        {model.intro}
      </Container>
    <Container>
    {model.technologies.map((technology, idx) => {
      return (
        <span style={{fontWeight:"bold", marginRight:".5em"}}>{technology}</span> 
      );
    })
    }
    </Container>
    </Container>
      <Container style={{display:"flex", flexDirection:"column", alignItems:"space-between"}}>
        {Object.keys(model.tags).map((key, idx) => {
          return (
            <Checkbox label={key} checked={model.tags[key]} />
          );
        })
        }
      </Container>
    </Segment>
  )
}

export default PortfolioItem;

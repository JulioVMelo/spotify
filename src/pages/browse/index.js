import React, {Component} from 'react';
import { Container, Title, List, Playlist } from './styles';
import PropTypes from 'prop-types';

class Browse extends Component {

  render() {
    return(
      <Container>
        <Title>Navegar</Title>
        <List>
          
            <Playlist to={`/playlists/1`}>
              <img src="https://f4.bcbits.com/img/a2211851590_10.jpg" alt="titulo"/>
              <strong>stron</strong>
              <p>description</p>
            </Playlist>
          
        </List>
      </Container>
    );
  };
}


export default Browse;

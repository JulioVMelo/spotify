import React from 'react';
import {Container, Header} from './styles';

const Playlist = () => (
  <Container>
    <Header>
    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/Stargroves-album-cover.png?auto=format&q=60&fit=max&w=930" alt="album" />
    <div>
      <span>Playlist</span>
      <h1>Rock forever</h1>
      <p>13 músicas</p>
      <button>Play</button>
    </div>
    </Header>
  </Container>
);

export default Playlist;

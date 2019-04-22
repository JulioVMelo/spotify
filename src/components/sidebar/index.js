import React from 'react';
import { Container, NewPlaylist, Nav } from './styles';
import AddPlayList from '../../assets/images/add_playlist.svg';

const Sidebar = () => {
  return(
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="#">Navegar</a>
          </li>
          <li>
            <a href="#">Radio</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Sua biblioteca</span>
          </li>
          <li>
            <a href="#">Seu daily mix</a>
          </li>
          <li>
            <a href="#">Tocados recentemente</a>
          </li>
          <li>
            <a href="#">Músicas</a>
          </li>
          <li>
            <a href="#">Álbums</a>
          </li>
          <li>
            <a href="#">Artistas</a>
          </li>
          <li>
            <a href="#">Estações</a>
          </li>
          <li>
            <a href="#">Arquivos locais</a>
          </li>
          <li>
            <a href="#">videos</a>
          </li>
          <li>
            <a href="#">Podcasts</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>Minhas playlists</span>
          </li>
          <li>
            <a href="#">Melhores do rock</a>
          </li>
        </Nav>
      </div>

      <NewPlaylist>
        <img src={AddPlayList} alt="playlist"/>
        Nova playlist
      </NewPlaylist>
    </Container>
  );
};

export default Sidebar;

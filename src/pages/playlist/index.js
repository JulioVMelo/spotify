import React from 'react';
import { Container, Header, SongList } from './styles';
import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

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
    <SongList cellPadding={0} cellSpacing={0}>
      <thead>
        <th></th>
        <th>Título</th>
        <th>Artista</th>
        <th>Albúm</th>
        <th> <img src={ClockIcon} alt="duração"/> </th>
      </thead>
      <tbody>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
        <tr>
          <td> <img src={PlusIcon} alt="adicionar"/> </td>
          <td> Papercurt </td>
          <td> Link park </td>
          <td> Hybrid Theory </td>
          <td> 3:26 </td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;

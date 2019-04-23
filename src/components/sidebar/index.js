import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, NewPlaylist, Nav } from './styles';
import AddPlayList from '../../assets/images/add_playlist.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

class Sidebar extends Component{
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      }))
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return(
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navegar</Link>
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
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`/playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>

        <NewPlaylist>
          <img src={AddPlayList} alt="playlist"/>
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);

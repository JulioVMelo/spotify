import React, { Component } from 'react';
import './config/reactotron';
import { Provider } from 'react-redux';
import Sidebar from './components/sidebar/';
import Player from './components/player/';
import Header from './components/header/'
import { Wrapper, Container, Content } from './styles/components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Wrapper>
            <Container>
              <Sidebar />
              <Content>
                <Header />
                <Routes />
              </Content>
            </Container>
            <Player />
          </Wrapper>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

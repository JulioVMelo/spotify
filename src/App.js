import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/';
import Sidebar from './components/sidebar/';
import Player from './components/player/';
import Header from './components/header/'
import { Wrapper, Container, Content } from './styles/components';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

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

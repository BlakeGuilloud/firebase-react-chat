import React, { Component } from 'react';
import styled from 'styled-components';

import HeaderContainer from './HeaderContainer';
import ContentContainer from './ContentContainer';

const App = styled.div`
  background-color: #C5E0DC;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
`;

class AppContainer extends Component {
  render() {
    return (
      <App>
        <HeaderContainer />
        <ContentContainer {...this.props} />
      </App>
    );
  }
}

export default AppContainer;
import React, { Component } from 'react';
import { Header, Footer } from '../components';

class AppContainer extends Component {
  render() {
    return (
      <div className="app">
        <Header className="app-header" />
        <div className="app-content">
          {this.props.children}
        </div>
        <Footer className="app-header" />
      </div>
    )
  }
};

export default AppContainer;
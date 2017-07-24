import React, { Component } from 'react';

// import HeaderContainer from './HeaderContainer';
import FooterContainer from './FooterContainer';
import ContentContainer from './ContentContainer';

class AppContainer extends Component {
  render() {
    return (
      <div className="app bg-success">
        {/* <HeaderContainer /> */}
        <ContentContainer {...this.props} />
        <FooterContainer />
      </div>
    )
  }
};

export default AppContainer;
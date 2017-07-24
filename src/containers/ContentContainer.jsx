import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Content } from '../components';

class ContentContainer extends Component {
  render() {
    return <Content />;
  }
};

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;
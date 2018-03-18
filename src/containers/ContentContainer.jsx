import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentContainer extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

ContentContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentContainer;
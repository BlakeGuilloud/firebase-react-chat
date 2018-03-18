import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`

`;

const Footer = (props) => {
  return (
      <FooterWrapper>
        <span>
          FireChat
        </span>
        &nbsp;|&nbsp;
        <span>
          Blake Guilloud
        </span>
      </FooterWrapper>
  );
};

export default Footer;
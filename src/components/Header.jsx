import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <span>
        FireChat
      </span>
      &nbsp;||&nbsp;
      <span>
        Blake Guilloud
      </span>
    </HeaderWrapper>
  );
};

export default Header;
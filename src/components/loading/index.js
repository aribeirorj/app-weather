import React from 'react';
import StyledContentLoader from 'styled-content-loader';
import { Container } from './styles';

function Loading() {
  return (
    <StyledContentLoader>
      <Container />
    </StyledContentLoader>
  );
}

export default Loading;

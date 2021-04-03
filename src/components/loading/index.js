import React from 'react';
import StyledContentLoader from 'styled-content-loader';

function Loading() {
  return (
    <StyledContentLoader>
      <div
        style={{
          borderRadius: '45px !important',
          padding: '5px',
          width: '380px',
          height: '500px',
        }}
      />
    </StyledContentLoader>
  );
}

export default Loading;

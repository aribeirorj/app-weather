import React from 'react';

import { Container, Title, Input } from './styles';

function Search() {
  return (
    <Container>
      <Title>Weather</Title>
      <Input
        type="text"
        name="city"
        placeholder="Qual sua cidade?"
        autoComplete="off"
      />
    </Container>
  );
}

export default Search;

import React from 'react';
import { useForm } from 'react-hook-form';

import { Container, Title, Input } from './styles';

function Search(props) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    props.loadDataSearch(data);
  };

  return (
    <Container>
      <Title>Weather</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          name="city"
          placeholder="Qual sua cidade?"
          autoComplete="off"
          {...register('city')}
        />
      </form>
    </Container>
  );
}

export default Search;

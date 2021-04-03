import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';
import { Card, Search, Loading } from '../../components';
import { loadInfoUser } from '../../useCase';

function Dashboard() {
  const [dataWeather, setDataWeather] = useState({});

  const loadDataInitial = useCallback(async () => {
    let infoWeather = await loadInfoUser();
    setDataWeather(infoWeather);
  }, []);

  useEffect(() => {
    loadDataInitial();
  }, [loadDataInitial]);

  return (
    <Container>
      <Search />
      {Object.entries(dataWeather).length === 0 ? (
        <Loading />
      ) : (
        <Card data={dataWeather} />
      )}
    </Container>
  );
}

export default Dashboard;

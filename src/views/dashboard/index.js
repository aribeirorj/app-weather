import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';
import { Card, Search } from '../../components';
import { loadInfoUser } from '../../useCase';

function Dashboard() {
  const [dataWeather, setDataWeather] = useState({});

  const loadDataInitial = useCallback(async () => {
    let infoWeather = await loadInfoUser();
    setDataWeather(infoWeather);
    // console.log(dataWeather.name);
  }, [loadInfoUser]);

  useEffect(() => {
    loadDataInitial();
  }, [loadDataInitial]);

  return (
    <Container>
      <Search />
      <Card data={dataWeather} />
    </Container>
  );
}

export default Dashboard;

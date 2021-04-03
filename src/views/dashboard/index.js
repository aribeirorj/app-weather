import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';
import { Card, Search, Loading } from '../../components';
import { loadDataCoordinate, loadDataCity } from '../../useCase';

function Dashboard() {
  const [dataWeather, setDataWeather] = useState({});

  const loadDataSearch = useCallback(async (params) => {
    let infoDataCity = await loadDataCity(params);
    !!infoDataCity && setDataWeather(infoDataCity.data);
  }, []);

  const loadDataInitial = useCallback(async () => {
    let infoDataCoordinate = await loadDataCoordinate();
    infoDataCoordinate && setDataWeather(infoDataCoordinate.data);
  }, []);

  useEffect(() => {
    loadDataInitial();
  }, [loadDataInitial]);

  return (
    <Container>
      <Search loadDataSearch={loadDataSearch} />
      {Object.entries(dataWeather).length === 0 ? (
        <Loading />
      ) : (
        <Card dataWeather={dataWeather} />
      )}
    </Container>
  );
}

export default Dashboard;

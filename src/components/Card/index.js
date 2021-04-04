import React from 'react';
import night_image from '../../assets/img/night_image.svg';
import day_image from '../../assets/img/day_image.svg';

import {
  Container,
  Head,
  Body,
  Description,
  Footer,
  Icon,
  Details,
} from './styles';

function Card(props) {
  const {
    name = '',
    main = '',
    weather = [{ description: '', icon: '' }],
  } = props.dataWeather;

  const {
    temp = '',
    temp_max = '',
    temp_min = '',
    pressure = '',
    humidity = '',
  } = main;
  const { description = '', icon = '' } = weather[0];

  let imageWeather = icon.includes('d') ? day_image : night_image;
  let urlIcon = `http://openweathermap.org/img/wn/${icon}.png`;

  return (
    <Container img={imageWeather} alt="Imagem do tempo">
      <Head>{name}</Head>
      <Body>
        <Description>
          <div>
            <span>{Math.trunc(temp)}°c</span>
          </div>
          <div>
            <strong>{description}</strong>
            <div>{Math.trunc(temp_max)}° máx</div>
            <div>{Math.trunc(temp_min)}° min</div>
          </div>
        </Description>
        <Icon>
          <img src={urlIcon} alt="Icone do tempo atual" />
        </Icon>
      </Body>
      <Footer>
        <Details>
          <span>{pressure}</span>
          <div>pressão</div>
        </Details>
        <Details>
          <span>{humidity}</span>
          <div>umidade</div>
        </Details>
      </Footer>
    </Container>
  );
}

export default Card;

import React from 'react';
import night_image from '../../assets/img/night_image.svg';
import day_image from '../../assets/img/day_image.svg';

import { Container, Head, Body, Description, Footer, Icon } from './styles';

function Card(props) {
  debugger;
  const {
    name = '',
    main = '',
    weather = [{ description: '', icon: '' }],
  } = props.data;
  const { temp, temp_max, temp_min, pressure = '', humidity = '' } = main;
  const { description, icon } = weather[0];

  return (
    <Container img={day_image}>
      <Head>{name}</Head>
      <Body>
        <Description>
          <div>
            <span>{Math.trunc(temp)}°c</span>
          </div>
          <div>
            <div>{description}</div>
            <div>{Math.trunc(temp_max)}° máx</div>
            <div>{Math.trunc(temp_min)}° min</div>
          </div>
        </Description>
        <Icon>
          <img src={`http://openweathermap.org/img/wn/${icon}.png`} />
        </Icon>
      </Body>
      <Footer>
        <div>
          <span>{pressure}</span>
          <div>pressão</div>
        </div>
        <div>
          <span>{humidity}</span>
          <div>umidade</div>
        </div>
      </Footer>
    </Container>
  );
}

export default Card;

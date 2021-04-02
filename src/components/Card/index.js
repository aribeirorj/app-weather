import React from 'react';
import cloud from '../../assets/img/cloud.svg';
import day_image from '../../assets/img/day_image.svg';
import down from '../../assets/img/down.svg';
import night_image from '../../assets/img/night_image.svg';
import up from '../../assets/img/up.svg';
import { Container, Head, Body, Description, Footer, Icon } from './styles';

function Card(data) {
  debugger;
  const { name = '', main = '', weather = '' } = data.data;
  return (
    <Container img={day_image}>
      <Head>{name}</Head>
      <Body>
        <Description>
          <div>
            <span>{Math.trunc(main.temp)}°</span>
          </div>
          <div>
            <p>{weather.description}</p>
            <p>{Math.trunc(main.temp)}°</p>
            <p>{Math.trunc(main.temp)}°</p>
          </div>
        </Description>
        <Icon>
          <img src={cloud} />
        </Icon>
      </Body>
      {/* <Footer>
        <div>
          <div>
            <span>35&deg;C</span>
          </div>
          <div>
            <span>35&deg;C</span>
          </div>
        </div>
        <div>
          <div>
            <span>35&deg;C</span>
          </div>
          <div>
            <span>35&deg;C</span>
          </div>
        </div>
      </Footer> */}
    </Container>
  );
}

export default Card;

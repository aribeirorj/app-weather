import React from 'react';
import cloud from '../../assets/img/cloud.svg';
import day_image from '../../assets/img/day_image.svg';
import down from '../../assets/img/down.svg';
import night_image from '../../assets/img/night_image.svg';
import up from '../../assets/img/up.svg';
import { Container, Head, Body, Description, Footer, Icon } from './styles';

function Card() {
  return (
    <Container img={day_image}>
      <Head>Niteroi</Head>
      <Body>
        <Description>
          <div>
            <span>35&deg;C</span>
          </div>
          <div>
            <p>Trovoadas</p>
            <p>33&deg;C</p>
            <p>33&deg;C</p>
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

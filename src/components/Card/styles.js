import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 45px !important;
  align-items: center;
  background-color: #fff;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  width: 40%;
  height: 100vh;
  min-width: 315px;
  max-width: 380px;
  padding: 30px;
  -webkit-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  -moz-box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
  box-shadow: 33px 40px 47px -23px rgba(173, 173, 173, 0.75);
`;

export const Head = styled.div`
  display: flex;
  font-size: 30pt;
  justify-content: center;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: --5px;
  line-height: 10pt;
  align-items: center;

  span {
    font-size: 50pt;
  }

  div {
    margin: 10pt;
  }
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-around;

  div {
    font-size: 20px;
  }
`;

export const Icon = styled.div`
  display: flex;
  border-radius: 100%;
  width: 60pt;
  height: 60pt;
  background: #202020;

  img {
    margin: auto;
    height: 40px;
  }
`;

export const Footer = styled.div`
  display: flex;
`;

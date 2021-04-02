import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  padding-top: 20px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 50px;
  font-weight: 800;
`;

export const Input = styled.input`
  font-size: 18px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ced4da;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  border-radius: 30px;
  ::placeholder {
    color: #6c757d;
  }
  &:focus {
    border-color: #80bdff;
  }
`;

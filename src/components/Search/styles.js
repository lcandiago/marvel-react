import styled from 'styled-components';

export const Form = styled.form`
  display: flex;

  @media (max-width: 420px) {
    flex-direction: column;
  }
`;

export const Input = styled.input`
  height: 40px;
  font-size: 22px;
  padding: 0 8px;
  flex: 1;
  margin-right: 14px;

  @media (max-width: 550px) {
    font-size: 16px;
  }

  @media (max-width: 420px) {
    flex: auto;
    margin-right: 0;
  }
`;

export const Button = styled.button`
  background-color: #f0141e;
  border: none;
  color: white;
  padding: 0 20px;
  font-weight: bold;

  @media (max-width: 420px) {
    height: 40px;
    margin-top: 14px;
  }
`;

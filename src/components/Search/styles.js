import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex: 1;
  width: 100%;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

export const Input = styled.input`
  height: 48px;
  padding: 0 16px;
  flex: 1;
  margin-right: 14px;
  border-radius: 6px;

  @media (max-width: 600px) {
    font-size: 16px;
    width: 100%;
  }

  @media (max-width: 600px) {
    flex: auto;
    margin-right: 0;
    margin-bottom: 14px;
  }
`;

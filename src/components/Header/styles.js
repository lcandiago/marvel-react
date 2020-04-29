import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  margin-right: 40px;

  @media (max-width: 430px) {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

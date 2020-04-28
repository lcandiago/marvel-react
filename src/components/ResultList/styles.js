import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -6px;
  margin-right: -6px;
  margin-top: 40px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6px;
  padding-right: 6px;
  width: 25%;

  @media (max-width: 860px) {
    width: 33.333333%;
  }

  @media (max-width: 600px) {
    width: 50%;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const Name = styled.span`
  font-weight: bold;
  margin-top: 10px;
`;

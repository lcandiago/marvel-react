import styled from 'styled-components';

export const InfoSection = styled.section`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;

  @media (max-width: 700px) {
    flex-direction: column-reverse;
  }
`;

export const Description = styled.div`
  margin-right: 40px;
  flex: 1;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
`;

export const Image = styled.img`
  width: 400px;
  max-width: 100%;
  align-self: center;

  @media (max-width: 700px) {
    margin-bottom: 20px;
  }
`;

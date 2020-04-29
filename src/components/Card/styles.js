import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 6px;
  padding-right: 6px;
  width: 25%;
  margin-bottom: 30px;
  cursor: ${(props) => (props.onClick ? 'pointer' : 'auto')};
  transition: 400ms;

  ${(props) =>
    props.onClick &&
    `
    &:hover {
      transform: scale(1.1);
    }
  `}

  > div {
    position: relative;
    height: 300px;
  }

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
  position: absolute;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Name = styled.span`
  margin-top: 10px;
  flex: 1;
  position: absolute;
  background: linear-gradient(
    0deg,
    rgba(240, 20, 30, 1) 0%,
    rgba(240, 20, 30, 0.7) 50%,
    rgba(240, 20, 30, 0) 100%
  );
  width: 100%;
  text-align: left;
  bottom: 0;
  padding: 40px 16px 20px;
  font-size: 20px;
  font-weight: bold;

  ${(props) =>
    props.withoutButtonText &&
    `
    transform: translateY(30px);
  `}
`;

export const Button = styled.button`
  background-color: #f0141e;
  border: none;
  color: white;
  padding: 0 16px;
  height: 50px;
  width: 100%;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  padding-bottom: 10px;
  text-align: left;
  margin-top: -1px;
  cursor: pointer;
`;

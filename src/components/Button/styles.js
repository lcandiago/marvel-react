import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background-color: #f0141e;
  border: none;
  color: white;
  padding: 0 20px;
  font-weight: bold;
  height: 48px;
  margin-top: ${(props) => (props.mTop ? `${props.mTop}px` : '0px')};
  cursor: pointer;
  transition: 400ms;
  width: ${(props) => (props.fullWidth ? '100%' : 'auto')};

  &:hover {
    background-color: ${shade(0.2, '#f0141e')};
    transform: scale(1.05);
  }
`;

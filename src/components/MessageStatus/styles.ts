import { PropsMessage } from '@components/MessageStatus';
import styled from 'styled-components';

export const P = styled.div<PropsMessage>`
  padding: 1rem;
  color: white;
  background-color: ${props => props.isSuccess ? "green" : "red"};
  display: ${props => props.isSuccess === null ? "none" : ""};
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
`;

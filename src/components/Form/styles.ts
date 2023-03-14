import styled from 'styled-components';
export const Form = styled.form`
  width: 50rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: white
`;

export const Title = styled.h1`
  font-weight: 200;
  `;

export const Input = styled.input`
  color: white;
  padding: 2rem;
  background: rgba(255, 255, 255, 0);
  border-radius: 1.6rem;
  box-shadow: 0 0.4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.76rem);
  -webkit-backdrop-filter: blur(0.76rem);
  border: 1px solid rgba(255, 255, 255, 0.13)
`;

export const TextArea = styled.textarea`
  color: white;
  padding: 2rem;
  background: rgba(255, 255, 255, 0);
  border-radius: 1.6rem;
  box-shadow: 0 0.4rem 3rem rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.76rem);
  -webkit-backdrop-filter: blur(0.76rem);
  border: 1px solid rgba(255, 255, 255, 0.13)
`;


export const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius:0.5rem;
  padding: 2rem;
`;
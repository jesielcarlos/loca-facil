// app/login/styles.ts
import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
`;

export const LoginForm = styled.form`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  margin-bottom: 1.25rem;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 1rem;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #74ebd5;
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 0.75rem;
  background-color: #74ebd5;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #56c7c7;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  text-align: center;
`;

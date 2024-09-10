// app/styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex: 1;
  background: linear-gradient(135deg, #74ebd5 0%, #acb6e5 100%);
  overflow: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  h1 {
    font-size: 1.75rem;
    color: #333333;
  }
  nav {
    display: flex;
    gap: 1rem;
  }
`;

export const Footer = styled.footer`
  margin-top: auto;
  background-color: #ffffff;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 0.875rem;
    color: #333333;
  }
`;

export const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;
  color: #333333;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2rem;
  color: #333333;
`;

export const Button = styled.button`
  background-color: #74ebd5;
  color: #333333;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 0 0.5rem;

  &:hover {
    background-color: #56c7c7;
  }
`;
// app/login/page.tsx
'use client';

import React, { useState } from 'react';
import { LoginContainer, LoginForm, Input, Button, Title, ErrorMessage } from './styles';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validação simples
    if (!email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Lógica de autenticação
    try {
      // Sua lógica de autenticação aqui
      console.log('Email:', email, 'Password:', password);
    } catch (err) {
      setError('Falha na autenticação. Tente novamente.');
    }
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Entrar</Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;

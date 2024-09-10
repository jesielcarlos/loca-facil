// app/page.tsx
'use client';

import React from 'react';
import { Container, Header, Footer, MainContent, Button, Description, Title } from './styles';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <h1>Imobiliária RentSys</h1>
        <nav>
          <Link href="/login"><Button>Login</Button></Link>
          <Link href="/register"><Button>Cadastre-se</Button></Link>
        </nav>
      </Header>

      {/* Conteúdo principal */}
      <MainContent>
        <Title>Gerencie seus Imóveis com Facilidade</Title>
        <Description>
          O RentSys é a solução ideal para sua imobiliária. Controle contratos de aluguel, inquilinos e proprietários em um único sistema, com toda a praticidade e segurança que você precisa.
        </Description>
        <div>
          <Link href="/login"><Button>Entrar</Button></Link>
          <Link href="/register"><Button>Cadastre-se</Button></Link>
        </div>
      </MainContent>

      {/* Footer */}
      <Footer>
        <p>© 2024 RentSys - Sistema de Controle de Aluguéis. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
};

export default HomePage;
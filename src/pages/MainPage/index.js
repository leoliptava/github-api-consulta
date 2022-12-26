import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button } from './styles';

import gitLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={gitLogo} alt="API Github" />
      <Title> API GitHub </Title>

      <Form>
        <Input
          placeholder="Usuário..."
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          {' '}
          <MdSearch size={42} />{' '}
        </Button>
      </Form>
    </Container>
  );
};

export default MainPage;

import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import { Container, Logo, Title, Form, Input, Button, Copy } from './styles';

import gitLogo from '../../assets/images/github-logo.svg';

const MainPage = () => {
  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={gitLogo} alt="API Github" />
      <Title> API GitHub </Title>

      <Form>
        <Input
          placeholder="leoliptava"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`} id="submit">
          {' '}
          <MdSearch size={42} />{' '}
        </Button>

        {document.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            const btn = document.querySelector('#submit');

            btn.click();
          }
        })}
      </Form>

      <Copy>
        Desenvolvido por Léo Felipe
        <br />
        Veja o{' '}
        <a href="https://github.com/leoliptava/github-api-consulta">
          respositório Github
        </a>
      </Copy>
    </Container>
  );
};

export default MainPage;

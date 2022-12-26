import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Tile1,
  Tile2,
  Tile3,
  Tile4,
  Loading,
  Container,
  Sidebar,
  Main,
} from './styles';

import Profile from './profile';
import Filter from './Filter';
import Repositories from './Repositories';
import { getRepos, getUser, getLangsFrom } from '../../services/api';

const RepositoriesPage = () => {
  const { login } = useParams();

  const [loading, setLoading] = useState(true);

  const [currentLanguage, setCurrentLanguage] = useState();
  const [repositories, setRepos] = useState();
  const [languages, setLanguages] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepos(reposResponse.data);
      setLanguages(getLangsFrom(reposResponse.data));

      setTimeout(() => {
        setLoading(false);
      }, '3000');
    };
    loadData();
  }, []);

  const onFilterClick = (language) => {
    setCurrentLanguage(language);
  };

  if (loading) {
    return (
      <Loading>
        <Tile1 />
        <Tile2 />
        <Tile3 />
        <Tile4 />
      </Loading>
    );
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter
          languages={languages}
          currentLanguage={currentLanguage}
          onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
          repositories={repositories}
          currentLanguage={currentLanguage}
        />
      </Main>
    </Container>
  );
};
export default RepositoriesPage;

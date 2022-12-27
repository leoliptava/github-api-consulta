import React from 'react';
import PropTypes from 'prop-types';
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md';
import {
  Avatar,
  Container,
  Header,
  Login,
  Name,
  Inner,
  Data,
  Arrow,
  ArrowTop,
  ArrowBottom,
} from './styles';

const Profile = ({ user }) => (
  <Container>
    <Header>
      <Arrow href="/">
        <ArrowTop />
        <ArrowBottom />
      </Arrow>
      <Avatar src={user.avatar_url} />
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>

    <Inner>
      <Data>
        <MdGroup size={20} /> {user.following} seguidores • {user.followers}{' '}
        seguindo
      </Data>
      {user.company && (
        <Data>
          <MdWork size={20} />
          {user.company}
        </Data>
      )}
      {user.location && (
        <Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>
      )}
      {user.blog && (
        <Data>
          <MdLink size={20} />
          <a href={`\\${user.blog}`}>{user.blog}</a>
        </Data>
      )}
    </Inner>
  </Container>
);

Profile.propTypes = {
  user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    company: PropTypes.string,
    blog: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};

export default Profile;

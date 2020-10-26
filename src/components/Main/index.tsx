import React from 'react';

import {
  Container,
  Header,
  BackIcon,
  ProfileInfo,
  ButtomMenu,
  HomeIcon,
  SearchIcon,
  EmailIcon,
  BellIcon,
} from './styles';

import ProfilePage from '../ProfilePage';

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>

        <ProfileInfo>
          <strong> Aleph Junio</strong>
          <span>520 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />

      <ButtomMenu>
        <HomeIcon className="active" />
        <SearchIcon />
        <BellIcon />
        <EmailIcon />
      </ButtomMenu>
    </Container>
  );
};

export default Main;

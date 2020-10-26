import React from 'react';
import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  Foolwage,
  LocationIcon,
  CakeIcon,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Aleph Junio</h1>
        <h2>@alephjunio</h2>

        <p>
          Software Engine at <a href="htttps://itau.com.br">@itau-unibanco</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 24 dezembro de 1994
          </li>
        </ul>

        <Foolwage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>1M </strong> seguidores
          </span>
        </Foolwage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;

import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Vinicius Teixeira Barreto"
                nickname="@v_t-b"
              />,
              <FollowSuggestion
                name="Guilherme Rodz"
                nickname="@guilherme_rodz"
              />,
              <FollowSuggestion name="Diego Fernandez" nickname="@diego3g" />,
              <FollowSuggestion name="Rocket Seat" nickname="@rocketseat" />,
            ]}
          />
          <List
            title="Oque há na tecnologia."
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="Oque acontece na politica."
            elements={[<News />, <News />, <News />]}
          />
          <List
            title="O Tweets mais comentados !"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
};

export default SideBar;

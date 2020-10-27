/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Description,
  Dot,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

interface Props {
  name: string;
  nickname: string;
  day: number;
  month: string;
  tweet: string;
  comments: number;
  likes: number;
  retwwets: number;
}

const Tweet: React.FC<Props> = ({
  nickname,
  name,
  day,
  month,
  tweet,
  comments,
  likes,
  retwwets,
}) => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>{name}</strong>
            <span>{nickname}</span>
            <Dot />
            <time>
              {day} {month}
            </time>
          </Header>
          <Description>{tweet}</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              {comments}
            </Status>
            <Status>
              <RetweetIcon />
              {retwwets}
            </Status>
            <Status>
              <LikeIcon />
              {likes}
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;

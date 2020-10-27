import React from 'react';

import Tweet from '../Tweet';

import { Container, Tab, Tweets } from './styles';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tab>Tweets</Tab>

      <Tweets>
        <Tweet
          nickname="@alephjunio"
          name="Alef Junio"
          day={24}
          month="Dezembro"
          tweet="Foguete não tem ré"
          comments={250}
          likes={500}
          retwwets={120}
        />
        <Tweet
          nickname="@v_t_b"
          name="Vinicius Teixeira"
          day={30}
          month="Novembro"
          tweet="Tecnologia TOP esse React JS"
          comments={100}
          likes={130}
          retwwets={50}
        />
        <Tweet
          nickname="@igorborges"
          name="Igor Borges"
          day={12}
          month="Outubro"
          tweet="Selemium para automação, melhor ferramenta!"
          comments={143}
          likes={800}
          retwwets={52}
        />
        <Tweet
          nickname="@alephjunio"
          name="Alef Junio"
          day={24}
          month="Dezembro"
          tweet="Foguete não tem ré"
          comments={250}
          likes={500}
          retwwets={120}
        />
        <Tweet
          nickname="@guilherme_rodz"
          name="Guilherme Rodz"
          day={12}
          month="Agosto"
          tweet="Foguete não tem ré, vamos para cima @RocketSeat!!"
          comments={1500}
          likes={1000}
          retwwets={300}
        />
        <Tweet
          nickname="@diego3g"
          name="Diego Fernandez"
          day={10}
          month="Agosto"
          tweet="Nova NLW, aguardem...."
          comments={500}
          likes={1500}
          retwwets={500}
        />
      </Tweets>
    </Container>
  );
};

export default Feed;

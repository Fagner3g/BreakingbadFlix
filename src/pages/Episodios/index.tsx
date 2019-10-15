import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { List, Segment } from 'semantic-ui-react';

// Redux
import { ApplicationState } from '~/store';
import { episodesRequest } from '~/store/modules/episodes/actions';
import { Episodes } from '~/store/modules/episodes/types';

import { Container, Content, Subtitle } from './styles';
import ListItem from './components/ListItem';

export default function Epsodios() {
  const dispatch = useDispatch();
  const episodes = useSelector((state: ApplicationState) => state.episodes);

  useEffect(() => {
    dispatch(episodesRequest(''));
  }, [dispatch]);

  return (
    <Container>
      <Content>
        <Subtitle>Epsodios</Subtitle>
        <Segment inverted>
          <List divided inverted>
            {episodes.data.map(item => (
              <ListItem episode={item} />
            ))}
          </List>
        </Segment>
      </Content>
    </Container>
  );
}

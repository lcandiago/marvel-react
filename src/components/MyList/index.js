import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Card from '../Card';

import { Section, Container } from './styles';

const MyList = () => {
  const history = useHistory();

  const characters = useSelector((state) => state.characters);

  if (characters.length) {
    return (
      <Section>
        <h1>My List</h1>

        <Container>
          {characters.map((character) => (
            <Card
              key={character.id}
              content={character}
              buttonText="See more"
              onClick={() => history.push(`/character/${character.id}`)}
            />
          ))}
        </Container>
      </Section>
    );
  }

  return null;
};

export default MyList;

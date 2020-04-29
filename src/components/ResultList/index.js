import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import * as CharacterActions from '../../store/modules/characters/actions';

import Card from '../Card';

import { Container } from './styles';

const ResultList = ({ results, setResults }) => {
  const dispatch = useDispatch();

  const saveCharacter = useCallback(
    (result) => {
      dispatch(CharacterActions.addCharacter(result));

      // localStorage.setItem(
      //   '@MarvelReact:savedCharacters',
      //   JSON.stringify(newSavedCharacters),
      // );

      const newResults = results.filter((r) => r.id !== result.id);

      setResults(newResults);
    },
    [results, setResults, dispatch],
  );

  return (
    <Container>
      {results.map((result) => (
        <Card
          key={result.id}
          content={result}
          buttonText="Add to List"
          onClick={() => saveCharacter(result)}
        />
      ))}
    </Container>
  );
};

export default ResultList;

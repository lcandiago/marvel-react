import React from 'react';

import { Container, Card, Image, Name } from './styles';

const ResultList = ({ results }) => {
  return (
    <Container>
      {results.map((result) => (
        <Card key={result.id}>
          <Image
            src={`${result.thumbnail.path}.${result.thumbnail.extension}`}
            alt={result.name}
          />
          <Name>{result.name}</Name>
        </Card>
      ))}
    </Container>
  );
};

export default ResultList;

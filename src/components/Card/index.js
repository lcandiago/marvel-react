import React from 'react';

import { Container, Image, Name, Button } from './styles';

const Card = ({ content, buttonText, onClick }) => {
  return (
    <Container key={content.id} onClick={onClick}>
      <div>
        <Image
          src={`${content.thumbnail.path}.${content.thumbnail.extension}`}
          alt={content.name || content.title}
        />
        <Name withoutButtonText={!buttonText}>
          {content.name || content.title}
        </Name>
      </div>
      <Button type="button">{buttonText}</Button>
    </Container>
  );
};

export default Card;

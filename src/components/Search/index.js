import React, { useCallback, useState } from 'react';

import api from '../../services/api';

import { Form, Input, Button } from './styles';

const Search = ({ setResults }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await api.get(
        `/characters?nameStartsWith=${search}&limit=4&apikey=${process.env.REACT_APP_API_KEY}`,
      );

      const { results: fetchedResults } = response.data.data;

      setResults(fetchedResults);
    },
    [search, setResults],
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        placeholder="Digite o nome do personagem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button type="submit">Pesquisar</Button>
    </Form>
  );
};

export default Search;

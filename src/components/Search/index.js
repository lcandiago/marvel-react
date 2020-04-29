import React, { useCallback, useState } from 'react';

import api from '../../services/api';

import Button from '../Button';

import { Form, Input } from './styles';

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
        placeholder="Type the character name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button type="submit">Search</Button>
    </Form>
  );
};

export default Search;

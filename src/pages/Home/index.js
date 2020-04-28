import React, { useState } from 'react';

import Search from '../../components/Search';
import ResultList from '../../components/ResultList';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <section>
      <Search setResults={setResults} />

      <ResultList results={results} />
    </section>
  );
};

export default Home;

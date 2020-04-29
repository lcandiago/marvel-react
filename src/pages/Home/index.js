import React, { useState } from 'react';

import Header from '../../components/Header';
import Search from '../../components/Search';
import ResultList from '../../components/ResultList';
import MyList from '../../components/MyList';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <section>
      <Header>
        <Search setResults={setResults} />
      </Header>

      {results.length > 0 && (
        <ResultList results={results} setResults={setResults} />
      )}

      <MyList />
    </section>
  );
};

export default Home;

import React, { useState, useCallback } from 'react';

import api from '../../services/api';

import Card from '../Card';
import Button from '../Button';

import { Container } from './styles';

const Series = ({ id }) => {
  const [series, setSeries] = useState([]);
  const [seriesOffset, setSeriesOffset] = useState(0);
  const [seriesTotal, setSeriesTotal] = useState(1);

  const loadSeries = useCallback(
    async (offset = 0) => {
      const response = await api.get(
        `/characters/${id}/series?limit=12&offset=${offset}&apikey=${process.env.REACT_APP_API_KEY}`,
      );

      const { total } = response.data.data;
      const { results: fetchedSeries } = response.data.data;

      setSeries([...series, ...fetchedSeries]);
      setSeriesOffset(offset + 12);
      setSeriesTotal(total);
    },
    [id, series],
  );

  return (
    <section>
      <h2>Series</h2>

      <Container>
        {series.map((serie) => (
          <Card key={serie.id} content={serie} />
        ))}
      </Container>

      {series.length < seriesTotal && (
        <Button onClick={() => loadSeries(seriesOffset)} mTop={20}>
          Load Series
        </Button>
      )}
    </section>
  );
};

export default Series;

import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import api from '../../services/api';
import store from '../../store';

import Home from './index';

const apiMock = new MockAdapter(api);

afterEach(() => {
  jest.resetAllMocks();
});

function buildCharacter(overrides) {
  return {
    id: 1,
    name: 'Spider-Man',
    thumbnail: {
      path: 'image-url',
      extension: '.jpg',
    },
    ...overrides,
  };
}

test('search character and render results', async () => {
  apiMock.onGet().reply(200, {
    data: {
      results: [
        buildCharacter(),
        buildCharacter({ id: 2, name: 'Spider-Woman' }),
      ],
    },
  });

  const { getByText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>,
  );

  const input = getByPlaceholderText(/type the character name/i);
  const button = getByText(/search/i);

  // Expect Input and Button to be in the document
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();

  const search = 'Spider';

  fireEvent.change(input, {
    target: {
      value: search,
    },
  });

  fireEvent.click(button);

  const spiderManCard = await waitForElement(() => getByText(`Spider-Man`));
  const spiderWomanCard = await waitForElement(() => getByText(`Spider-Woman`));

  // Expect making an API call and fetched characters to be in the document.
  expect(spiderManCard).toBeInTheDocument();
  expect(spiderWomanCard).toBeInTheDocument();
});

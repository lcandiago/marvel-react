import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import GlobalStyle from './styles/global';
import Routes from './routes';
import store from './store';

const App = () => (
  <>
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
    <GlobalStyle />
  </>
);

export default App;

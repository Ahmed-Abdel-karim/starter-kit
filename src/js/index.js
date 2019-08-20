// @ts-nocheck
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'react-jss';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { ApplyGlobalCss, createTheme } from './theme';
import CssBase from './components/CssBase';
import Test from './Test';

const reducer = () => {};

// put global css here
ApplyGlobalCss();

const theme = createTheme();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const Component = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBase />
        <Test />
      </ThemeProvider>
    </Provider>
  );
};

const HotWrapper = hot(module)(Component);

const node = document.getElementById('root');

ReactDom.render(<HotWrapper />, node);

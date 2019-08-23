// @ts-nocheck
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import '../scss/customBootstrapTheme.scss';
import Home from './pages/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const reducer = () => {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(reduxThunk)));

const Component = () => {
  return (
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  );
};

const HotWrapper = hot(module)(Component);

const node = document.getElementById('root');

ReactDom.render(<HotWrapper />, node);

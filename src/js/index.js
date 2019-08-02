/* eslint-disable no-underscore-dangle */
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import formReducer from './state/fromReducer';

const store = createStore(
  combineReducers({
    test: formReducer('test')
  }),
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Component = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const HotWrapper = hot(module)(Component);

const node = document.getElementById('root');

ReactDom.render(<HotWrapper />, node);

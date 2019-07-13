/* eslint-disable-next-line import/no-extraneous-dependencies */
import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';

const Component = () => {
  return <div> </div>;
};

const App = hot(module)(Component);

const node = document.getElementById('root');

ReactDom.render(<App />, node);

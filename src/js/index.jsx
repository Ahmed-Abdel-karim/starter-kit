import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';


const Component = () => {
  return (
    <Provider store={{}}>
      <div></div>
    </Provider>
  );
};

const HotWrapper = hot(module)(Component);

const node = document.getElementById('root');

ReactDom.render(<HotWrapper />, node);

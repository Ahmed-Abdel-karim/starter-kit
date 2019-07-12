import { hot } from 'react-hot-loader';
import React from 'react';
import ReactDom from 'react-dom';

const Component = function (props) {
  return (
    <div>
      hello world da bgad
    </div>
  )
}

const App = hot(module)(Component)

const node = document.getElementById("root");

ReactDom.render(<App />, node)
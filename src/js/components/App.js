import React from 'react';
import withForm from './withForm';

const App = () => {
  return <div>Hello world</div>;
};

export default withForm({
  id: 'app-form',
  selector: () => {},
  actions: {}
})(App);

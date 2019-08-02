import React, { Component } from 'react';
import FormComp from './FormComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.formRef = React.createRef();
  }

  render() {
    return (
      <div>
        <FormComp ref={this.formRef} />
      </div>
    );
  }
}

export default App;

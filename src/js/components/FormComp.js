/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react'
import withForm from './withForm';
import Field from './Field';

const Inpuu = (props) => <input type="number" {...props} />

class FormComp extends Component {
  render() {
    return (
      <div>
        <Field
          name="sayed"
        />
        <Field
          name="ali"
        />
      </div>
    )
  }
}


export default withForm({
  id: "test",
  selector: ({ test }) => ({ formState: test }),
  actions: {}
})(FormComp)
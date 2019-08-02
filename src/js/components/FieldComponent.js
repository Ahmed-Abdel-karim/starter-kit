/* eslint-disable react/prop-types */
import React from 'react'
import { isFunction } from '../utils/utils';
import isEqual from 'react-fast-compare';



class FieldComponent extends React.Component {

  static defaultProps = {
    input: (props) => <input {...props} />
  }

  componentDidMount() {
    const { formMethods, name, required } = this.props
    formMethods.registerField(name, required);
  }



  handleChange = (e) => {
    const { target: { value, name } } = e;
    const { formMethods: { changeField } } = this.props;
    changeField(name, value)
  }


  render() {
    const { input: Input, formMethods, fieldState, ...otherProps } = this.props;

    if (!fieldState) return null

    // handle if the input is function 

    if (isFunction(Input)) return Input({ ...otherProps })

    // handle if the input is React Component

    return (
      React.cloneElement(Input, { ...otherProps })
    )
  }

}


export default FieldComponent


import React, { Component } from 'react';
import { connect } from 'react-redux';
import actionCreators from '../state/formActionCreators';
import { FormProvider } from './formContext';

// todo
// 1 - add errors
// 2 - add propTypes

const withForm = ({ id, selector, actions = {} }) => EnhancedComponent => {
  class FormWrapper extends Component {
    componentDidMount() {}

    render() {
      return (
        <FormProvider value={{}}>
          <EnhancedComponent {...this.props} />
        </FormProvider>
      );
    }
  }

  const mapStateToProps = state => {
    return selector(state);
  };

  return connect(
    mapStateToProps,
    { ...actionCreators(id), ...actions }
  )(FormWrapper);
};

export default withForm;

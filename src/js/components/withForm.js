// @ts-nocheck
import React, { Component } from 'react';
import { connect } from 'react-redux';
import _omit from 'lodash/omit';
import _pick from 'lodash/pick';
import actionCreators from '../state/formActionCreators';
import { FormProvider } from './formContext';

// todo
// 1 - add errors
// 2 - add propTypes
// 3 - add scroll to error

const withForm = ({ id, selector, actions = {} }) => EnhancedComponent => {
  class FormWrapper extends Component {
    // all the name of actions related to the form
    formMethodsList = Object.keys(actionCreators(id));

    componentDidMount() {}

    // remove the form methods form the props passed to the component
    getOtherProps = () => _omit(this.props, [...this.formMethodsList, 'formState']);

    render() {
      // eslint-disable-next-line react/prop-types
      const { innerRef, formState } = this.props;
      return (
        <FormProvider
          // pass only form methods
          value={{
            ..._pick(this.props, this.formMethodsList),
            formState
          }}
        >
          <EnhancedComponent ref={innerRef} {...this.getOtherProps()} />
        </FormProvider>
      );
    }
  }

  FormWrapper.displayName = `withForm-${id}`;

  const mapStateToProps = state => {
    return selector(state);
  };

  return connect(
    mapStateToProps,
    { ...actionCreators(id), ...actions },
    null,
    { forwardRef: true }
  )(React.forwardRef((props, ref) => <FormWrapper {...props} innerRef={ref} />));
};

export default withForm;

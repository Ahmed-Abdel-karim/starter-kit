// @ts-nocheck
/* eslint-disable react/prop-types */
import React from 'react';
import { FormConsumer } from './formContext';
import FieldComponent from './FieldComponent';
import { getFieldState } from '../state/selectors';


const Field = (props) => (
  <FormConsumer>
    {({ formState, ...formProps }) => <FieldComponent fieldState={getFieldState(formState, props.name)} formMethods={formProps} {...props} />}
  </FormConsumer>
)

export default Field
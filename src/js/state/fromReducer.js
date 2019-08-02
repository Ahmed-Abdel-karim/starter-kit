// @ts-nocheck
import * as types from './formActionTypes';


/**
 * form reducer is a higher order reducer function that returens reducer function
 * with the form id to differentiate between forms in the same page
 */

/** 
 * form reducer helpers
 */

const registerField = (state, { payload, meta }) => {
  const { name } = meta;
  const { required, fieldType } = payload
  if (fieldType === "array") {
    return {
      ...state,
      [name]:
        { value: [], required: Boolean(required), touched: false, error: "" }
    }
  }
  return {
    ...state,
    [name]:
      { value: '', required: Boolean(required), touched: false, error: "" }
  }
}

const handleChange = (state, { payload, meta }) => {
  const { value } = payload;
  const { name } = meta;
  return {
    ...state, [name]: {
      ...state[name],
      value,
      touched: true,
      error: ""
    }
  }

}




const formReducer = (id, initialstate = {}) => (state = initialstate, action) => {
  /**
   * check if the action belong to this form if true it will let it continue to the reducer
   */
  if (action.meta && action.meta.id === id) {
    switch (action.type) {
      case types.REGISETR_FIELD(id):
        return registerField(state, action);
      case types.CHANGE(id):
        return handleChange(state, action);
      default:
        return state;
    }
  } else {
    return state;
  }

};

export default formReducer;

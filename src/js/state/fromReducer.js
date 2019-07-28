import * as types from './formActionTypes'

/**
 * form reducer is a higher order function that returens reducer function 
 * with the form id to differentiate between forms in the same page
 */

const formReducer = (id) => (state, action) => {
  /** 
   * check if the action belong to this form if true it will let it continue to the reducer 
  */
  if (id === action.meta.id) {
    switch (action.type) {
      case types.CHANGE(id):
        return state
      default:
        return state
    }
  }
  return state;
}

export default formReducer
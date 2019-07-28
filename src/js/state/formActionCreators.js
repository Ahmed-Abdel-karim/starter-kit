import * as types from './formActionTypes';

export const changeField = id => (name, value) => {
  return {
    type: types.CHANGE(id),
    payload: {
      value
    },
    meta: {
      name,
      id
    }
  };
};

export const setInitialState = id => value => {
  return {
    type: types.SET_INITIAL_STATE(id),
    payload: {
      value
    },
    meta: {
      id
    }
  };
};

export const resetForm = id => () => {
  return {
    type: types.RESET(id),
    meta: {
      id
    }
  };
};

export const setFieldError = id => (name, errorMessage) => {
  return {
    type: types.ERROR(id),
    payload: {
      errorMessage
    },
    meta: {
      name,
      id
    }
  };
};

export const registerField = id => (name, required) => {
  return {
    type: types.REGISETR_FIELD(id),
    payload: {
      name,
      required
    },
    meta: {
      id
    }
  };
};

const actionCreatorsGroup = id => ({
  changeField: changeField(id),
  setInitialState: setInitialState(id),
  resetForm: resetForm(id),
  setFieldError: setFieldError(id),
  registerField: registerField(id)
});

export default actionCreatorsGroup;

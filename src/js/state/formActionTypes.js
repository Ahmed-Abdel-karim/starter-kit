/**
 * the action id is invoked in the action type for debugging  for example if form name is
 * addUser so the change field action appears in redux-devtools as @@form/addUser/CHANGE
 */
export const CHANGE = id => `"@@form/${id}/CHANGE"`;
export const RESET = id => `"@@form/${id}/RESET"`;
export const SET_INITIAL_STATE = id => `"@@form/${id}/SET_INITIAL_STATE"`;
export const ERROR = id => `"@@form/${id}/ERROR"`;
export const REGISETR_FIELD = id => `"@@form/${id}/REGISETR_FIELD"`;

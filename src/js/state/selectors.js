export const getFieldState = (formState, name) => formState[name]
export const getFieldValue = (formState, name, def = "") => formState[name] ? formState[name].value : def 
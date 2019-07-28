import React from 'react';

const formContext = React.createContext({});
export const FormProvider = formContext.Provider;
export const FormConsumer = formContext.Consumer;

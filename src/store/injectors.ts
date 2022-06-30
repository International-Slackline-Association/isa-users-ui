import { AnyAction, Reducer } from '@reduxjs/toolkit';
import React from 'react';
import { useStore } from 'react-redux';

import { RootStateKeyType, RequiredRootState } from './types';

export const useInjectReducer = <Key extends RootStateKeyType>(params: {
  key: Key;
  reducer: Reducer<RequiredRootState[Key], AnyAction>;
}) => {
  const store = useStore();
  const [isInjected, setIsInjected] = React.useState(false);

  React.useLayoutEffect(() => {
    store.injectReducer(params.key, params.reducer);
    setIsInjected(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isInjected;
};

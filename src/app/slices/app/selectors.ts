import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state?: RootState) => state?.app ?? initialState;

export const selectAuthState = createSelector(
  [selectSlice],
  state => state.authState,
);

export const selectSnackbarNotification = createSelector(
  [selectSlice],
  state => state.snackbarNotification,
);

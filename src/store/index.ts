import { createStore } from 'redux';
import { reducer } from './reducer';

export type AppState = ReturnType<typeof reducer>;

export const configureStore = (persistedState: AppState | undefined) =>
  createStore(reducer, persistedState);

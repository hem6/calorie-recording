import { createStore } from 'redux';
import { reducer, State } from './reducer';

export type { State, Food } from './reducer';
export const configureStore = (persistedState: State | undefined) =>
  createStore(reducer, persistedState);

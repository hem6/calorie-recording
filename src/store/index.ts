import { createStore } from 'redux';
import { reducer, State, Food } from './reducer';

export type State = State;
export type Food = Food;
export const configureStore = (persistedState: State | undefined) =>
  createStore(reducer, persistedState);

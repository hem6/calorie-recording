import { createStore } from 'redux';
import { reducer } from './reducer';

export type AppState = ReturnType<typeof reducer>;
export const configureStore = () => createStore(reducer);

import React from 'react';
import Layout from './components/Layout';
import InputBoxContainer from './containers/InputBoxContainer';
import RecordBoxContainer from './containers/RecordBoxContainer';
import ProgressBoxContainer from './containers/ProgressBoxContainer';
import DebugBox from './components/DebugBox';
import { Provider } from 'react-redux';
import { configureStore, State } from './store';

const persistedState = localStorage.getItem('state');
const hydrateState = (stateStr: string | null) => {
  if (stateStr === null) {
    return undefined;
  }

  const parsedState = JSON.parse(stateStr);
  const hydratedState: State = {
    ...parsedState,
    foods: parsedState.foods.map((food: any) => ({
      ...food,
      date: new Date(food.date)
    }))
  };
  return hydratedState;
};

const store = configureStore(hydrateState(persistedState));
store.subscribe(() =>
  localStorage.setItem('state', JSON.stringify(store.getState()))
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ProgressBoxContainer />
        <InputBoxContainer />
        <RecordBoxContainer />
        <DebugBox />
      </Layout>
    </Provider>
  );
};

export default App;

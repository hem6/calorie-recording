import React from 'react';
import Layout from './components/Layout';
import InputBoxContainer from './containers/InputBoxContainer';
import RecordBoxContainer from './containers/RecordBoxContainer';
import ProgressBoxContainer from './containers/ProgressBoxContainer';
import { Provider } from 'react-redux';
import { configureStore } from './store';

const store = configureStore();

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <ProgressBoxContainer />
        <InputBoxContainer />
        <RecordBoxContainer />
      </Layout>
    </Provider>
  );
};

export default App;

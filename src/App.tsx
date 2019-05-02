import React from 'react';
import Layout from './components/Layout';
import InputBox from './components/InputBox';
import RecordBox from './components/RecordBox';
import ProgressBox from './components/ProgressBox';

const App: React.FC = () => {
  return (
    <Layout>
      <InputBox />
      <RecordBox />
      <ProgressBox />
    </Layout>
  );
};

export default App;

import React from 'react';

const ProgressBox: React.FC = ({ children }) => (
  <div className='box'>
    <h2 className='has-text-weight-bold'>進捗</h2>
    <h3>本日</h3>
    <progress className='progress is-danger' max='2000' value='3000' />
    <h3>今週</h3>
    <progress className='progress is-info' max='14000' value='3000' />
  </div>
);

export default ProgressBox;

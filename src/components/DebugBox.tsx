import React, { useState } from 'react';

const DebugBox: React.FC = () => {
  const [state, setState] = useState(false);
  return (
    <div className='box'>
      <h2 className='has-text-weight-bold'>デバッグ用</h2>
      <button className='button is-small' onClick={() => setState(!state)}>
        表示
      </button>
      {state ? <p>{localStorage.getItem('state')}</p> : null}
    </div>
  );
};

export default DebugBox;

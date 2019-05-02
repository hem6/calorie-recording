import React from 'react';

const InputBox: React.FC = ({ children }) => (
  <div className='box'>
    <div className='field is-horizontal'>
      <div className='field-body'>
        <div className='field'>
          <div className='control'>
            <input className='input' type='text' placeholder='日付' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <input
              className='input is-expanded'
              type='text'
              placeholder='食べたもの'
            />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <input className='input' type='text' placeholder='kcal' />
          </div>
        </div>
        <div className='field'>
          <div className='control'>
            <a className='button is-info'>登録</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InputBox;

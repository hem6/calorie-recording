import React, { useState } from 'react';

type Props = { addFood: Function };

const InputBox: React.FC<Props> = ({ addFood }) => {
  const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const defaultInput = { date: todayStr, name: '', kcal: '' };
  const [currentInput, setInput] = useState(defaultInput);
  const modifyInput = (payload: {
    date?: string;
    name?: string;
    kcal?: string;
  }) => setInput({ ...currentInput, ...payload });

  const handleSubmit = () => {
    const date = new Date(currentInput.date);
    const name = currentInput.name;
    const kcal = Number(currentInput.kcal);
    addFood(date, name, kcal);
    setInput(defaultInput);
  };

  return (
    <div className='box'>
      <div className='field is-horizontal'>
        <div className='field-body'>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='日付'
                value={currentInput.date}
                onChange={e => modifyInput({ date: e.target.value })}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                className='input is-expanded'
                type='text'
                placeholder='食べたもの'
                value={currentInput.name}
                onChange={e => modifyInput({ name: e.target.value })}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='kcal'
                value={currentInput.kcal}
                onChange={e => modifyInput({ kcal: e.target.value })}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <a className='button is-info' onClick={handleSubmit}>
                登録
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

import React, { useState, useMemo, useRef } from 'react';

export type Option = { label: string; kcal: number };
type Props = { addFood: Function; options: Option[] };

const InputBox: React.FC<Props> = ({ addFood, options }) => {
  const todayStr = new Date(Date.now() + 9 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  const [food, setFood] = useState({ date: todayStr, name: '', kcal: '' });
  const [autocomplete, setAutocomplete] = useState({
    isActive: false,
    filteredOptions: [] as Option[],
  });
  const kcalRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const date = new Date(food.date);
    const name = food.name;
    const kcal = Number(food.kcal);
    addFood(date, name, kcal);
    setFood({ date: todayStr, name: '', kcal: '' });
  };

  const uniqueOptionList: Option[] = useMemo(() => {
    const uniqueLabelOptions = options.reduceRight(
      (acc, opt) => ({ ...acc, [opt.label]: opt }),
      {}
    );
    return Object.values(uniqueLabelOptions);
  }, [options]);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const filteredOptions = uniqueOptionList.filter((option) =>
      option.label.includes(input)
    );
    setFood({ ...food, name: input });
    setAutocomplete({ ...autocomplete, filteredOptions: filteredOptions });
  };

  const handleComplete = (option: Option) => {
    setFood({ ...food, name: option.label, kcal: String(option.kcal) });
    if (kcalRef && kcalRef.current) {
      kcalRef.current.focus();
    }
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
                value={food.date}
                onChange={(e) => setFood({ ...food, date: e.target.value })}
              />
            </div>
          </div>
          <div className='field'>
            <div
              className={`dropdown is-block ${
                autocomplete.filteredOptions.length > 0 && ' is-active'
              }`}
            >
              <div className='dropdown-trriger'>
                <input
                  className='input is-expanded'
                  type='text'
                  placeholder='食べたもの'
                  value={food.name}
                  onChange={handleNameChange}
                  onFocus={() =>
                    setAutocomplete({ ...autocomplete, isActive: true })
                  }
                  onBlur={() =>
                    setTimeout(
                      () =>
                        setAutocomplete({ ...autocomplete, isActive: false }),
                      100
                    )
                  }
                />
              </div>
              {food.name.length > 0 && autocomplete.isActive && (
                <div className='dropdown-menu'>
                  <div className='dropdown-content'>
                    {autocomplete.filteredOptions.map((item) => (
                      <div
                        className='dropdown-item'
                        onClick={() => handleComplete(item)}
                      >
                        {item.label} ({item.kcal}kcal)
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                placeholder='kcal'
                value={food.kcal}
                onChange={(e) => setFood({ ...food, kcal: e.target.value })}
                ref={kcalRef}
              />
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <button className='button is-info' onClick={handleSubmit}>
                登録
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputBox;

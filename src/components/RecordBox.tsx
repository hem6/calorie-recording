import React from 'react';

type Props = {
  foods: { id: number; name: string; kcal: number }[];
  removeFood: Function;
};

const RecordBox: React.FC<Props> = ({ foods, removeFood }) => {
  return (
    <div className='box'>
      <h2 className='has-text-weight-bold'>過去ログ</h2>
      <table className='table is-fullwidth'>
        <tbody>
          {foods.map((food) => (
            <tr key={food.id}>
              <td>{food.name}</td>
              <td>{food.kcal}</td>
              <td>
                <button
                  className='delete'
                  onClick={() => removeFood(food.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordBox;

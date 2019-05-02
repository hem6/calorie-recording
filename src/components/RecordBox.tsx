import React from 'react';

const RecordBox: React.FC = ({ children }) => (
  <div className='box'>
    <h2 className='has-text-weight-bold'>過去ログ</h2>
    <table className='table is-fullwidth'>
      <tbody>
        <tr>
          <td>朝ラーメン</td>
          <td>1000</td>
          <td>
            <a className='delete' />
          </td>
        </tr>
        <tr>
          <td>昼ラーメン</td>
          <td>1000</td>
          <td>
            <a className='delete' />
          </td>
        </tr>
        <tr>
          <td>夜ラーメン</td>
          <td>1000</td>
          <td>
            <a className='delete' />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RecordBox;

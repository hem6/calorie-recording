import React from 'react';
type Props = {
  today: number;
  todayCap: number;
  week: number;
  weekCap: number;
};

const roundTo2decimals = (n: number) => Math.round(n * 100) / 100;

const ProgressBox: React.FC<Props> = ({ today, todayCap, week, weekCap }) => (
  <div className='box'>
    <h2 className='has-text-weight-bold'>進捗</h2>
    <h3>本日 - {`${today}kcal / ${todayCap}kcal`}</h3>
    <progress
      className={`progress ${today > todayCap ? 'is-danger' : 'is-info'}`}
      max={todayCap}
      value={today}
    />
    <h3>
      今週 -{' '}
      {`${week}kcal / ${weekCap}kcal(${roundTo2decimals(
        week / (weekCap / 7)
      )}日分 / ${new Date().getDay() + 1}日目)`}
    </h3>
    <progress
      className={`progress ${week > weekCap ? 'is-danger' : 'is-info'}`}
      max={weekCap}
      value={week}
    />
  </div>
);

export default ProgressBox;

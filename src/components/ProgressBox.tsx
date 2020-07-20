import React from 'react';
type Props = {
  today: number;
  todayCap: number;
  week: number;
  weekCap: number;
  yesterdayResult: number;
};

const ProgressBox: React.FC<Props> = ({
  today,
  todayCap,
  week,
  weekCap,
  yesterdayResult,
}) => (
  <div className='box'>
    <h2 className='has-text-weight-bold'>進捗</h2>
    <h3>
      本日 - {`${today}kcal / ${todayCap}kcal`} (
      {today >= todayCap
        ? `+${today - todayCap}kcal`
        : `-${todayCap - today}kcal`}
      )
    </h3>
    <progress
      className={`progress ${today > todayCap ? 'is-danger' : 'is-info'}`}
      max={todayCap}
      value={today}
    />
    <h3>
      今週 - {`${week}kcal / ${weekCap}kcal`}(昨日まで:
      {`${yesterdayResult >= 0 ? '+' : ''}${yesterdayResult}`}kcal)
    </h3>
    <progress
      className={`progress ${week > weekCap ? 'is-danger' : 'is-info'}`}
      max={weekCap}
      value={week}
    />
  </div>
);

export default ProgressBox;

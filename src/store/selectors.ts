import { State } from './index';
import { createSelector } from 'reselect';

const DAYLY_CAP = 1800;
const WEEK_CAP = DAYLY_CAP * 7;

const getFoods = (state: State) => state.foods;
const getToday = () => new Date().setHours(0, 0, 0, 0);
const getDayInWeek = createSelector(
  [getToday],
  (today) => (new Date(today).getDay() + 2) % 7
);

const getWeekStart = createSelector(
  [getToday, getDayInWeek],
  (today, dayInWeek) => today - dayInWeek * 24 * 60 * 60 * 1000
);

const calcCaloriesTakenUntilYesterday = createSelector(
  [getFoods, getToday, getWeekStart],
  (foods, today, weekStart) => {
    const foodsUntilYesterday = foods.filter(
      (food) => weekStart <= food.date.getTime() && food.date.getTime() < today
    );
    return sumCalorie(foodsUntilYesterday);
  }
);

const calcCaloriesTakenToday = createSelector(
  [getFoods, getToday],
  (foods, today) => {
    const foodsToday = foods.filter((food) => food.date.getTime() >= today);
    return sumCalorie(foodsToday);
  }
);

const sumCalorie = (foods: State['foods']) =>
  foods.reduce((acc, food) => acc + food.kcal, 0);

const calcTodayCap = createSelector(
  [calcCaloriesTakenUntilYesterday, getDayInWeek],
  (caloriesTakenUntilYesterday, dayInWeek) => {
    const restCalories = WEEK_CAP - caloriesTakenUntilYesterday;
    const restDays = 7 - dayInWeek;

    const calculatedDailyCalorie = Math.round(restCalories / restDays);
    const standardDailyCalorie = DAYLY_CAP;

    return Math.min(calculatedDailyCalorie, standardDailyCalorie);
  }
);

const calcYesterdayResult = createSelector(
  [calcCaloriesTakenUntilYesterday, getDayInWeek],
  (caloriesTakenUntilYesterday, dayInWeek) => {
    const yesterdayBorder = dayInWeek * DAYLY_CAP;
    return caloriesTakenUntilYesterday - yesterdayBorder;
  }
);

export const progressSelector = createSelector(
  [
    calcTodayCap,
    calcCaloriesTakenToday,
    calcCaloriesTakenUntilYesterday,
    calcYesterdayResult,
  ],
  (
    todayCap,
    caloriesTakenToday,
    caloriesTakenUntilYesterday,
    yesterdayResult
  ) => ({
    todayCap: todayCap,
    weekCap: WEEK_CAP,
    today: caloriesTakenToday,
    week: caloriesTakenUntilYesterday + caloriesTakenToday,
    yesterdayResult: yesterdayResult,
  })
);

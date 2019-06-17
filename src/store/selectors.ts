import { State } from './index';
import { createSelector } from 'reselect';

const WEEK_CAP = 1800 * 7;

const getFoods = (state: State) => state.foods;
const getToday = () => new Date().setHours(0, 0, 0, 0);
const getWeekStart = createSelector(
  [getToday],
  today => today - new Date().getDay() * 24 * 60 * 60 * 1000
);

const calcCaloriesTakenUntilYesterday = createSelector(
  [getFoods, getToday, getWeekStart],
  (foods, today, weekStart) => {
    const foodsUntilYesterday = foods.filter(
      food => weekStart <= food.date.getTime() && food.date.getTime() < today
    );
    return sumCalorie(foodsUntilYesterday);
  }
);

const calcCaloriesTakenToday = createSelector(
  [getFoods, getToday],
  (foods, today) => {
    const foodsToday = foods.filter(food => food.date.getTime() >= today);
    return sumCalorie(foodsToday);
  }
);

const sumCalorie = (foods: State['foods']) =>
  foods.reduce((acc, food) => acc + food.kcal, 0);

const calcTodayCap = createSelector(
  [calcCaloriesTakenUntilYesterday, getToday],
  (caloriesTakenUntilYesterday, today) => {
    const restCalories = WEEK_CAP - caloriesTakenUntilYesterday;
    const restDays = 7 - new Date(today).getDay();

    const calculatedDailyCalorie = Math.round(restCalories / restDays);
    const standardDailyCalorie = WEEK_CAP / 7;

    return Math.min(calculatedDailyCalorie, standardDailyCalorie);
  }
);

export const progressSelector = createSelector(
  [calcTodayCap, calcCaloriesTakenToday, calcCaloriesTakenUntilYesterday],
  (todayCap, caloriesTakenToday, caloriesTakenUntilYesterday) => ({
    todayCap: todayCap,
    weekCap: WEEK_CAP,
    today: caloriesTakenToday,
    week: caloriesTakenUntilYesterday + caloriesTakenToday
  })
);

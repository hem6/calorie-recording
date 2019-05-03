import { Reducer } from 'redux';
import { ADD_FOOD, REMOVE_FOOD, addFood, removeFood } from './actions';

type Actions = ReturnType<typeof addFood | typeof removeFood>;
type Food = {
  id: number;
  date: Date;
  name: string;
  kcal: number;
};

type State = {
  foods: Food[];
};

const initialState = {
  foods: []
};

export const reducer: Reducer<State, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_FOOD:
      const existingIds = state.foods.map(food => food.id);
      const newId = Math.max(0, ...existingIds) + 1;
      return {
        ...state,
        foods: [...state.foods, { id: newId, ...action.payload }]
      };

    case REMOVE_FOOD:
      return {
        ...state,
        foods: state.foods.filter(food => food.id !== action.payload.id)
      };

    default:
      return state;
  }
};

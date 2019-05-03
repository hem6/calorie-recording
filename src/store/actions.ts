export const ADD_FOOD = 'ADD_FOOD';
export const REMOVE_FOOD = 'REMOVE_FOOD';

export const addFood = (date: Date, name: string, kcal: number) => {
  return { type: ADD_FOOD as typeof ADD_FOOD, payload: { date, name, kcal } };
};

export const removeFood = (id: number) => {
  return { type: REMOVE_FOOD as typeof REMOVE_FOOD, payload: { id } };
};

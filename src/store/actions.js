import { SET_ITEMS, FETCH_ITEMS } from './types';

export const setItems = (items) => ({
   type: SET_ITEMS,
   payload: items,
});

export const fetchItems = () => ({
   type: FETCH_ITEMS,
});

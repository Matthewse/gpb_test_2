import { SET_ITEMS, FETCH_ITEMS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE } from './types';

export const setItems = (items) => ({
   type: SET_ITEMS,
   payload: items,
});

export const fetchItems = () => ({
   type: FETCH_ITEMS,
});

export const showLoader = () => ({
   type: SHOW_LOADER,
});

export const hideLoader = () => ({
   type: HIDE_LOADER,
});

export const showErrorMessage = () => ({
   type: SHOW_ERROR_MESSAGE,
});

export const hideErrorMessage = () => ({
   type: HIDE_ERROR_MESSAGE,
});

import { SET_ITEMS, FETCH_ITEMS, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR_MESSAGE, HIDE_ERROR_MESSAGE, SET_ITEM_DETAILS, FETCH_ITEM_DETAILS } from './actionTypes';

export const setItems = (items) => ({
   type: SET_ITEMS,
   payload: items,
});

export const fetchItems = () => ({
   type: FETCH_ITEMS,
});

export const setItemDetails = (item) => ({
   type: SET_ITEM_DETAILS,
   payload: item,
});

export const fetchItemDetails = (id) => ({
   type: FETCH_ITEM_DETAILS,
   payload: id
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

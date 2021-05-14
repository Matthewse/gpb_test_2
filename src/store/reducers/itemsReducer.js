import { SET_ITEMS, SET_ITEM_DETAILS } from '../actions/actionTypes';

const initialState = {
   itemsList: [],
   itemDetails: '',
};

const itemsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_ITEMS:
         return { ...state, itemsList: action.payload }
      case SET_ITEM_DETAILS:
         return { ...state, itemDetails: action.payload }
      default: return state
   }
};

export default itemsReducer;
import { combineReducers } from 'redux';

import itemsReducer from './itemsReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
   items: itemsReducer,
   loader: loaderReducer,
});

export default rootReducer;
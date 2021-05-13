import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from '../saga';
import itemsReducer from '../store/itemsReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(itemsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher);

export default store;
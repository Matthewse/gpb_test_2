import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagaWatcher } from '../saga';
import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagaWatcher);

export default store;
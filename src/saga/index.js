import { takeEvery, put, call } from 'redux-saga/effects';
import { setItems } from '../store/actions';
import { FETCH_ITEMS } from '../store/types';

const fetchItems = async () => {
   const response = await fetch('http://localhost:7070/api/services');
   return await response.json();
}

function* sagaWorker() {
   try {
      const data = yield call(fetchItems);
      yield put(setItems(data));
   } catch (e) {

   }
}

export function* sagaWatcher() {
   yield takeEvery(FETCH_ITEMS, sagaWorker);
}

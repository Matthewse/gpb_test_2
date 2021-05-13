import { takeEvery, put, call } from 'redux-saga/effects';
import { setItems, showLoader, hideLoader, showErrorMessage, hideErrorMessage } from '../store/actions';
import { FETCH_ITEMS } from '../store/types';

const fetchItems = async () => {
   const response = await fetch('http://localhost:7070/api/services');
   return await response.json();
}

function* sagaWorker() {
   try {
      yield put(hideErrorMessage())
      yield put(showLoader())
      const data = yield call(fetchItems);
      yield put(setItems(data));
      yield put(hideLoader());
   } catch (e) {
      yield put(showErrorMessage())
      yield put(hideLoader())
   }
}

export function* sagaWatcher() {
   yield takeEvery(FETCH_ITEMS, sagaWorker);
}

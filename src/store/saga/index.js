import { takeEvery, put, call, all } from 'redux-saga/effects';
import { setItems, setItemDetails, showLoader, hideLoader, showErrorMessage, hideErrorMessage } from '../actions';
import { FETCH_ITEMS, FETCH_ITEM_DETAILS } from '../actions/actionTypes';

const fetchItems = async () => {
   const response = await fetch('http://localhost:7070/api/services');
   return await response.json();
}

const fetchItemDetails = async (id) => {
   const response = await fetch(`http://localhost:7070/api/services/${id}`);
   return await response.json();
}

function* fetchItemsWorker() {
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

function* fetchItemDetailsWorker(action) {
   try {
      yield put(hideErrorMessage())
      yield put(showLoader())
      const data = yield call(fetchItemDetails, action.payload);
      yield put(setItemDetails(data));
      yield put(hideLoader());
   } catch (e) {
      yield put(hideLoader())
   }
}

function* fetchItemsWatcher() {
   yield takeEvery(FETCH_ITEMS, fetchItemsWorker);
}

function* fetchItemDetailsWatcher() {
   yield takeEvery(FETCH_ITEM_DETAILS, fetchItemDetailsWorker);
}

export function* rootWatcher() {
   yield all([fetchItemsWatcher(), fetchItemDetailsWatcher()]);
}
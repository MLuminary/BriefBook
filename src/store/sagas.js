import {put, takeEvery} from 'redux-saga/effects';
import {GET_INIT_LIST} from './actionTypes';
import {getInitlISTAction} from './actionCreators';
import axios from 'axios';

function* getInitList() {
  try {
    const res = yield axios.get('http://localhost:8080/list');
    const action = getInitlISTAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('网络请求失败');
  }

}


function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
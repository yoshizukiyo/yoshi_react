import { takeLatest, put, call, fork, all } from 'redux-saga/effects';
import { fetchYoutube, fetchFlickr } from './api';
import * as names from './actionType';

//Youtube saga
function* callYoutube() {
	yield takeLatest(names.YOUTUBE.start, returnYoutube);
}
function* returnYoutube() {
	try {
		const response = yield call(fetchYoutube);
		yield put({ type: names.YOUTUBE.success, payload: response.data.items });
	} catch (err) {
		yield put({ type: names.YOUTUBE.fail, payload: err });
	}
}

//Flickr saga
function* callFlickr() {
	yield takeLatest(names.FLICKR.start, returnFlickr);
}
function* returnFlickr(action) {
	try {
		//fetchFlickr는 인수로 Opt객체가 전달되야하기 때문에 컴포넌트에서 다음과 같은 형식으로 action객체를 dispatch
		//{type: 'FLICKR_START', Opt: {type: 'user', user:'사용자 아이디'}}
		const response = yield call(fetchFlickr, action.Opt);
		console.log(response);
		yield put({ type: names.FLICKR.success, payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: names.FLICKR.fail, payload: err });
	}
}

export default function* rootSaga() {
	yield all([fork(callYoutube), fork(callFlickr)]);
}

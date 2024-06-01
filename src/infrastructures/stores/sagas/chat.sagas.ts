import { put, takeEvery } from "redux-saga/effects";
export function* loadChat(){
    yield put({type: "RELOAD_PAGE"})
}
export function* fetchChat(){
    yield takeEvery("CHAT_LOAD", loadChat);
}
import { all } from "redux-saga/effects";
import { fetchChat } from "./chat.sagas";

export default function* mainSaga(getState: any){
    yield all([
        fetchChat()
    ])
}
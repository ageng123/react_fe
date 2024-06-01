import { applyMiddleware, combineReducers, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import globalReducer from "./reducers/global.reducer"
import { configureStore } from "@reduxjs/toolkit"
import mainSaga from "./sagas/global.sagas"
const sageMiddleware = createSagaMiddleware()
const reducer = combineReducers({
    global: globalReducer
})
const store = configureStore({
    reducer: reducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sageMiddleware),
    devTools: true
})
export default store;
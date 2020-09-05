import { combineReducers, createStore } from "redux";


import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import MainPageReducer from "./mainPage/reducer";

// import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

let reducers = combineReducers({
  MainPageReducer
})

let store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga)

// window.store = store;

export default store;
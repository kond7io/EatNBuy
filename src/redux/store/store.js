import createSagaMiddleware from 'redux-saga';
import {call, all} from 'redux-saga/effects';
import { applyMiddleware, combineReducers, createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import UserSaga from "../User/User.saga";
import { UserReducer } from "../User/User.reducer";
import {GroupReducer} from "../Group/Group.reducer";
import GroupSaga from "../Group/Group.saga";


const store = combineReducers({
    user: UserReducer,
    group: GroupReducer
});

export function * rootSaga() {
    yield all([
        call(UserSaga),
        call(GroupSaga)
    ]);
}

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    store,
    composeWithDevTools(applyMiddleware(sagaMiddleware))

);

sagaMiddleware.run(rootSaga);
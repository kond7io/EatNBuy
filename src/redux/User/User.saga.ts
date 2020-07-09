import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserSignUpPending,
    getUserSignUpRejected,
    getUserSignUpResolved,
    HANDLE_SIGN_UP} from "./User.action";
import {
    userRegister} from "./User.api";

import Navigation from '../../utils/Navigation';
import Screens from '../../navigation/Screens';
import {flashMessage} from "../../utils/flashMessage";


function* signup(action: any) {
    yield put(getUserSignUpPending());

    try {
        const { name, email, password } = action.payload;
        const user = yield userRegister(name, email, password);
        yield put(getUserSignUpResolved(user))
        flashMessage('Uwaga' ,'Resolved','success')
        Navigation.navigate(Screens.SIGN_IN)

    } catch(error) {
        yield put(getUserSignUpRejected(error))
        flashMessage('Uwaga' ,'Wystąpił błąd podczas rejestracji','danger')
    }
}

export default function* UserSaga () {
    yield takeLeading(HANDLE_SIGN_UP, signup);
}
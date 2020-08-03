import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserSignInPending, getUserSignInRejected, getUserSignInResolved,
    getUserSignUpPending,
    getUserSignUpRejected,
    getUserSignUpResolved, HANDLE_SIGN_IN,
    HANDLE_SIGN_UP
} from "./User.action";
import {
    userCreateBranch,
    userLogin,
    userRegister
} from "./User.api";

import Navigation from '../../utils/Navigation';
import Screens from '../../navigation/Screens';
import {flashMessage} from "../../utils/flashMessage";
import {User} from "../../types/User";


function* signup(action: any) {
    debugger;
    yield put(getUserSignUpPending());
debugger;
    try {
        debugger;
        const { name, email, password } = action.payload;
        const user = yield userRegister(name, email, password);
        yield userCreateBranch();
        yield put(getUserSignUpResolved(user))
        debugger;
        flashMessage('Uwaga' ,'Resolved - register','success')
        Navigation.navigate(Screens.SIGN_IN)

    } catch(error) {
        debugger;
        yield put(getUserSignUpRejected(error))
        flashMessage('Uwaga' ,'Wystąpił błąd podczas rejestracji','danger')
    }
}

function* signin(action: any) {
    yield put(getUserSignInPending());

    try {
        const { email, password } = action.payload;
        const user: User  = yield userLogin(email, password);
        yield put(getUserSignInResolved(user));
        flashMessage('Uwaga' ,'Resolved - login','success')
        Navigation.navigate(Screens.GROUP_SCREEN)

    } catch(error) {
        yield put(getUserSignInRejected(error))
        flashMessage('Uwaga' ,'Wystąpił błąd podczas logowania','danger')
    }
}

export default function* UserSaga () {
    yield takeLeading(HANDLE_SIGN_UP, signup);
    yield takeLeading(HANDLE_SIGN_IN, signin);
}
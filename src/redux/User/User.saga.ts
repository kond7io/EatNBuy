import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserSignInPending,
    getUserSignInRejected,
    getUserSignInResolved,
    getUserSignUpPending,
    getUserSignUpRejected,
    getUserSignUpResolved,
    HANDLE_SIGN_IN,
    HANDLE_SIGN_UP
} from "./User.action";
import {
    userCreateBranchApi,
    userLoginApi,
    userRegisterApi
} from "./User.api";

import Navigation from '../../utils/Navigation';
import Screens from '../../navigation/Screens';
import {flashMessage} from "../../utils/flashMessage";
import {RegisteredUser, User} from "../../types/User";


function* signup(action: any) {
    debugger;
    yield put(getUserSignUpPending());
debugger;
    try {
        debugger;
        const { name, email, password } = action.payload;
        const registeredUser: RegisteredUser = yield userRegisterApi(email, password);
        yield userCreateBranchApi(name);
        yield put(getUserSignUpResolved(registeredUser));
        debugger;
        flashMessage('Rejestracja' ,'Konto pomyślnie utworzone','success')
        Navigation.navigate(Screens.SIGN_IN)

    } catch(error) {
        debugger;
        yield put(getUserSignUpRejected(error))
        flashMessage('Uwaga' ,'Wystąpił błąd podczas rejestracji','danger')
    }
}

function* signin(action: any) {
    debugger;
    yield put(getUserSignInPending());
debugger;
    try {
        debugger;
        const { email, password } = action.payload;
        const user: User  = yield userLoginApi(email, password);
        debugger;
        yield put(getUserSignInResolved(user));
        debugger;
        flashMessage('Logowanie' ,'Proces logowania przebiegł pomyślnie','success');
        Navigation.navigate(Screens.GROUP_SCREEN);

    } catch(error) {
        yield put(getUserSignInRejected(error));
        flashMessage('Uwaga' ,'Wystąpił błąd podczas logowania','danger');
    }
}



export default function* UserSaga () {
    yield takeLeading(HANDLE_SIGN_UP, signup);
    yield takeLeading(HANDLE_SIGN_IN, signin);

}
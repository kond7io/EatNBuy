import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserCreateGroupPending, getUserCreateGroupRejected, getUserCreateGroupResolved,
    getUserSignInPending, getUserSignInRejected, getUserSignInResolved,
    getUserSignUpPending,
    getUserSignUpRejected,
    getUserSignUpResolved, HANDLE_CREATE_GROUP, HANDLE_SIGN_IN,
    HANDLE_SIGN_UP
} from "./User.action";
import {
    userCreateBranchApi, userCreateGroupApi,
    userLoginApi,
    userRegisterApi
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
        const user = yield userRegisterApi(name, email, password);
        yield userCreateBranchApi(name);
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
        const user: User  = yield userLoginApi(email, password);
        yield put(getUserSignInResolved(user));
        flashMessage('Uwaga' ,'Resolved - login','success');
        Navigation.navigate(Screens.GROUP_SCREEN);

    } catch(error) {
        yield put(getUserSignInRejected(error));
        flashMessage('Uwaga' ,'Wystąpił błąd podczas logowania','danger');
    }
}

function* creategroup(action: any) {
    yield put(getUserCreateGroupPending());

    try {
        const {groupName} = action.payload;
        yield userCreateGroupApi(groupName);
        yield put(getUserCreateGroupResolved(groupName));
        flashMessage('Grupa pomyślnie dodana','', 'success');
         Navigation.navigate(Screens.ADD_USER_GROUP);

    } catch (error){
        yield put(getUserCreateGroupRejected(error));
        flashMessage('Uwaga','Wystąpił błąd podczas tworzenia grupy','danger');
    }
}

export default function* UserSaga () {
    yield takeLeading(HANDLE_SIGN_UP, signup);
    yield takeLeading(HANDLE_SIGN_IN, signin);
    yield takeLeading(HANDLE_CREATE_GROUP, creategroup);
}
import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserSignInPending,
    getUserSignInRejected,
    getUserSignInResolved,
    getUserSignUpPending,
    getUserSignUpRejected,
    getUserSignUpResolved,
    getUserCreateGroupPending,
    getUserCreateGroupRejected,
    getUserCreateGroupResolved,
    HANDLE_SIGN_IN,
    HANDLE_SIGN_UP,
    HANDLE_CREATE_GROUP, getUserDetailsPending, getUserDetailsResolved, getUserDetailsRejected
} from "./User.action";
import {
    userCreateBranchApi,
    userLoginApi,
    userRegisterApi,
    groupCreateBranchApi, getUserApi,
} from "./User.api";

import Navigation from '../../utils/Navigation';
import Screens from '../../navigation/Screens';
import {flashMessage} from "../../utils/flashMessage";
import {RegisteredUser, User} from "../../types/User";




function* signup(action: any) {
    yield put(getUserSignUpPending());
    debugger;
    try {
        debugger;
        const { name, email, password, profilImage } = action.payload;
        const registeredUser: RegisteredUser = yield userRegisterApi(email, password);
        debugger;
        yield userCreateBranchApi(name, profilImage);
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
    yield put(getUserSignInPending());
    debugger;
    try {
        const { email, password } = action.payload;
        debugger;
        const user: User  = yield userLoginApi(email, password);
        debugger;
        yield put(getUserSignInResolved(user));
        yield call(getUserDetailsAfterLogin);
        debugger;
        flashMessage('Logowanie' ,'Proces logowania przebiegł pomyślnie','success');
        Navigation.navigate(Screens.GROUP_SCREEN);

    } catch(error) {
        debugger;
        yield put(getUserSignInRejected(error));
        flashMessage('Uwaga' ,'Wystąpił błąd podczas logowania','danger');
    }
}

function* creategroup(action: any) {
    yield put(getUserCreateGroupPending());
    debugger;
    try {
        const {groupName} = action.payload;
        debugger;
        yield groupCreateBranchApi(groupName);
        yield put(getUserCreateGroupResolved(groupName));
        debugger;
        flashMessage('Gratulacje','Grupa pomyślnie utworzona', 'success');
        Navigation.navigate(Screens.MAIN_SCREEN);

    } catch (error){
        debugger;
        yield put(getUserCreateGroupRejected(error));
        flashMessage('Uwaga','Wystąpił błąd podczas tworzenia grupy','danger');
    }
}

export function* getUserDetailsAfterLogin(){
    debugger;
    yield put(getUserDetailsPending());
    debugger;
    try{
        debugger;
        const userDetails = yield getUserApi();
        yield put(getUserDetailsResolved(userDetails));
    } catch (error) {
        debugger;
        yield put(getUserDetailsRejected());
    }
}



export default function* UserSaga () {
    yield takeLeading(HANDLE_SIGN_UP, signup);
    yield takeLeading(HANDLE_SIGN_IN, signin);
    yield takeLeading(HANDLE_CREATE_GROUP, creategroup);


}
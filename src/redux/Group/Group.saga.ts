import {put, takeLatest, call, takeLeading} from 'redux-saga/effects';
import {
    getUserCreateGroupPending,
    getUserCreateGroupRejected,
    getUserCreateGroupResolved,
    HANDLE_CREATE_GROUP,
} from "./Group.action";
import {
    groupCreateBranchApi,
} from "./Group.api";

import Navigation from '../../utils/Navigation';
import Screens from '../../navigation/Screens';
import {flashMessage} from "../../utils/flashMessage";
import {User} from "../../types/User";



function* creategroup(action: any) {
    yield put(getUserCreateGroupPending());

    try {
        const {groupName} = action.payload;
        const group: User = yield groupCreateBranchApi(groupName);
        yield put(getUserCreateGroupResolved(group));
        flashMessage('Gratulacje','Grupa pomyślnie utworzona', 'success');
         Navigation.navigate(Screens.ADD_USER_GROUP);

    } catch (error){
        yield put(getUserCreateGroupRejected(error));
        flashMessage('Uwaga','Wystąpił błąd podczas tworzenia grupy','danger');
    }
}

export default function* GroupSaga () {

    yield takeLeading(HANDLE_CREATE_GROUP, creategroup);
}
import { NavigationActions } from 'react-navigation';
import { DrawerActions } from "react-navigation";
import { StackActions } from "react-navigation";

let _navigator;

function setTopLevelNavigator(navigatorRef) {
    _navigator = navigatorRef;
}

function genRef() {
    return _navigator;
}

function navigate(routeName, params) {
    _navigator.dispatch(
        NavigationActions.navigate({
            routeName,
            params
        })
    );
}

function refresh() {
    _navigator.dispatch(
        NavigationActions.setParams({
            params: { refresh: 'refresh'},
            key: 'refresh'
        })
    );
}

function toggleDrawer() {
    _navigator.dispatch(
        DrawerActions.toggleDrawer()
    );
}

export default {
    genRef,
    refresh,
    navigate,
    setTopLevelNavigator,
    toggleDrawer
}
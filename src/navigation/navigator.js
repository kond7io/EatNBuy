import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import { createStackNavigator} from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Screens from "./Screens";

import GroupScreen from "../screens/app/GroupScreen/GroupScreen";
import MainScreen from "../screens/app/MainScreen/MainScreen";
import ProductMagazine from "../screens/app/ProductMagazine/ProductMagazine";

import SignIn from "../screens/auth/SignIn/SignIn";
import SignUp from "../screens/auth/SignUp/SignUp";

import EBLoginForm from "../screens/auth/SignIn/EBLoginForm/EBLoginForm";
import EBRegistrationForm from "../screens/auth/SignUp/EBRegistratrionForm/EBRegistrationForm";
import StatisticsScreen from "../screens/app/StatisticsScreen/StatisticsScreen";
import SettingsScreen from "../screens/app/SettingsScreen/SettingsScreen";
import iconNavigator from "../utils/iconNavigator";
import {colors} from "../constans/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import AddProductList from "../screens/app/AddProductList/AddProductList";
import AddGroup from "../screens/app/GroupScreen/AddGroup/AddGroup";
import AddUserGroup from "../screens/app/GroupScreen/AddGroup/AddUserGroup/AddUserGroup";
import SelectGroup from "../screens/app/GroupScreen/SelectGroup/SelectGroup";


const AppBottomTabStack = createBottomTabNavigator({

        [Screens.MAIN_SCREEN]: {
            screen: MainScreen,
            navigationOptions: {
                title: 'Główna',
                tabBarIcon: iconNavigator('home')
            }
        },
        [Screens.STATISTICS_SCREEN]: {
            screen: StatisticsScreen,
            navigationOptions: {
                title: 'Statystki',
                tabBarIcon: iconNavigator('chart-line')

            }
        },
        [Screens.PRODUCT_MAGAZINE]: {
            screen: ProductMagazine,
            navigationOptions: {
                title: 'Magazyn',
                tabBarIcon: iconNavigator('box-open')

            }
        },
        [Screens.SETTINGS_SCREEN]: {
            screen: SettingsScreen,
            navigationOptions: {
                title: 'Ustawienia',
                tabBarIcon: iconNavigator('cogs'),
            }
        },

    },

    {headerMode: 'none', tabBarOptions: {activeTintColor: colors.theme, showLabel: false}},

    );

const AuthStack = createStackNavigator({
        [Screens.SIGN_IN]: SignIn,
        [Screens.SIGN_UP]: SignUp,

    },
    {headerMode: 'none'}
    );

const GroupStack = createStackNavigator({
    [Screens.GROUP_SCREEN]: GroupScreen,
    [Screens.ADD_GROUP]: AddGroup,
},
    {headerMode: 'none'}
    );


export default createAppContainer(createSwitchNavigator(
    {
        //Auth: AuthStack,
        Group: GroupStack,
        [Screens.ADD_USER_GROUP]: AddUserGroup,
        [Screens.SELECT_GROUP]: SelectGroup,
        App: AppBottomTabStack,
        [Screens.ADD_PRODUCT_LIST]: AddProductList
    },

));
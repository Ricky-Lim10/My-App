import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer'
import { AppTabNavigator} from './AppTabNavigator'
import NotificationScreen from '../screens/MyDonationScreen'
import ProblemScreen from '../screens/ProblemScreen.js'
import SettingScreen from '../screens/SettingScreen.js'

export const AppdrawerNavigator = createDrawerNavigator({
    Home : {
        screen: AppTabNavigator
    },
    Problems :{
        screen : ProblemScreen
    },
    Notifications :{
        screen : NotificationScreen
    },
    Setting : {
        screen : SettingScreen
    }
},
    {
        contentComponent:CustomSidebarMenu
    },
    {
        initialrouteName : "Home"
})
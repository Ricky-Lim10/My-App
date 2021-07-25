import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-native'

import WelcomeScreen from './screens/WElcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator} from './components/AppTabNavigator'

export default function App() {
    return (
        <AppContainer/>
    );
}

const switchNavigator = createSwitchNavigator({
    //might use different navigators
    WelcomeScreen: {screen: WelcomeScreen},
    Drawer:{screen: AppDrawerNavigator},
    BottomTab: {screen: AppTabnavigator},
});

const AppContainer = createAppContainer(swithcNavigator)
import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stack/HomeStackScren';

const Tab = createBottomTabNavigator();


const TabMain = () => {
    return (
        <>
            <Tab.Navigator>
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                    options={
                        { headerShown: false }
                    }
                />
                {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
            </Tab.Navigator>
        </>
    )
}

export default TabMain
import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stack/HomeStackScren';
import FavoritesStackScreen from './stack/FavoritesStackScreen';
import { FavToStorage } from '../util/FavToStorage';
import {useDispatch} from 'react-redux'
import { load } from '../store/favoritesSlice';

const Tab = createBottomTabNavigator();


const TabMain = () => {

    let dispatch = useDispatch();

    useEffect(() => {

        let favToStorage = new FavToStorage();

        favToStorage.getAllFav()
            .then(data => {
                if (data.length > 0) {
                    dispatch(load(data))
                }
            })

    }, [])


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
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesStackScreen}
                    options={
                        { headerShown: false }
                    }
                />
            </Tab.Navigator>
        </>
    )
}

export default TabMain
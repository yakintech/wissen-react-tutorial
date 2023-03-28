import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stack/HomeStackScren';
import FavoritesStackScreen from './stack/FavoritesStackScreen';
import { FavToStorage } from '../util/FavToStorage';
import { useDispatch, useSelector } from 'react-redux'
import { load } from '../store/favoritesSlice';
import FavoriteReducer from '../store/favoritesSlice';
import { HomeModel } from '../models/HomeModel';
import ContactStackScreen from './stack/CameraStackScreen';
import CameraStackScreen from './stack/CameraStackScreen';
import FileStackScreen from './stack/FileStackScreen';


const Tab = createBottomTabNavigator();


const TabMain = () => {

    let dispatch = useDispatch();

    type IRootState = ReturnType<typeof FavoriteReducer>;
    let state = useSelector<IRootState, HomeModel[]>(state => state.favorites);


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
                        {
                            headerShown: false,
                            tabBarIcon: ({ color }: any) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                            )
                        }
                    }
                />
                <Tab.Screen
                    name="Favorites"
                    component={FavoritesStackScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: ({ color }: any) => (
                                <MaterialCommunityIcons name="star" color={color} size={26} />
                            ),
                            tabBarBadge: state.length

                        }

                    }
                />

                <Tab.Screen
                    name="Contact"
                    component={CameraStackScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: ({ color }: any) => (
                                <MaterialCommunityIcons name="camera" color={color} size={26} />
                            ),
                    

                        }

                    }
                />
                  <Tab.Screen
                    name="File"
                    component={FileStackScreen}
                    options={
                        {
                            headerShown: false,
                            tabBarIcon: ({ color }: any) => (
                                <MaterialCommunityIcons name="file" color={color} size={26} />
                            ),
                    

                        }

                    }
                />
            </Tab.Navigator>
        </>
    )
}

export default TabMain
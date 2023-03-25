import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavoritesScreen from '../../screens/favorites/FavoritesScreen';

const FavoritesStack = createNativeStackNavigator();


const FavoritesStackScreen = () => {
    return (<>
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen name="Favorites" component={FavoritesScreen} />
        </FavoritesStack.Navigator>
    </>)
}

export default FavoritesStackScreen
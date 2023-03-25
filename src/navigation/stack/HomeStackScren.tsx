import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/HomeScreen';
import MuseumDetailScreen from '../../screens/home/MuseumDetailScreen';

const HomeStack = createNativeStackNavigator();


const HomeStackScreen = () => {
  return (<>
    <HomeStack.Navigator>
      
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="MuseumDetail" component={MuseumDetailScreen} />

    </HomeStack.Navigator>
  </>
  )
}

export default HomeStackScreen
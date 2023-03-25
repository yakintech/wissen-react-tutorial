import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
import { homeData } from '../../data/homeData';

const MuseumDetailScreen = ({ route, navigation }: any) => {

  const [detail, setdetail] = useState({});

  const { item } = route.params;



  return (
    <View style={{ flex: 1 }}>
      <MapView
      region={{latitude: item.lat, longitude: item.let,   latitudeDelta: 0.01,
        longitudeDelta: 0.01,}}
        style={{ ...StyleSheet.absoluteFillObject }}
      >

        <Marker
          coordinate={{ latitude: item.lat, longitude: item.let }}
        />
      </MapView>

      {/* <MapView
        style={{ ...StyleSheet.absoluteFillObject }}
        initialRegion={{
          latitude: item.lat,
          longitude: item.let,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      /> */}
    </View>
  )
}

export default MuseumDetailScreen
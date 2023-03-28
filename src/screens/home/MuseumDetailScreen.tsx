import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
const MuseumDetailScreen = ({ route, navigation }: any) => {

  const { item } = route.params;

  return (<>
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
    </View>
  </>
  
  )
}

export default MuseumDetailScreen
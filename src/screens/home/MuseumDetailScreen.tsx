import { View, StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { Card, Text } from 'react-native-paper';

const MuseumDetailScreen = ({ route, navigation }: any) => {

  const { item } = route.params;

  return (<>
    <View style={{ flex: 1, marginBottom:40 }}>
      <Card>
    
          <Card.Cover source={{ uri: item?.img }} />

          <Card.Content>
            <Text variant="titleLarge">{item?.name}</Text>
            <Text variant="bodyMedium">{item?.description}</Text>
          </Card.Content>

      </Card>
    </View>
    <View style={{ flex: 1 }}>

      <MapView
        region={{
          latitude: item.lat, longitude: item.let, latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
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
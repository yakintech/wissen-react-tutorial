import { View, Pressable } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MuseumBox = (props:any) => {
  return (
    <Card>
    <Pressable onPress={() => props.goToDetail(props.item)}>
      <Card.Cover source={{ uri: props.item?.img }} />

      <Card.Content>
        <Text variant="titleLarge">{props.item?.name}</Text>
        <Text variant="bodyMedium">{props.item?.description}</Text>
      </Card.Content>
    </Pressable>

    <Card.Actions>
      {
        props.isFavorite != undefined ?
       <MaterialCommunityIcons onPress={() => props.removeToFav(props.item)} name="star" size={26} />
          :
          <MaterialCommunityIcons onPress={() => props.addToFav(props.item)} name="star-outline" size={26} />

      }
    </Card.Actions>
  </Card>
  )
}

export default MuseumBox
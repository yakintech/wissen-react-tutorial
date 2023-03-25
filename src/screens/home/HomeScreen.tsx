import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { homeData } from '../../data/homeData'
import { HomeModel } from '../../models/HomeModel'

const HomeScreen = ({ navigation }: any) => {

  const goToDetail = (id: any) => {
    navigation.navigate('MuseumDetail', {
      id: id
    })
  }

  const renderItem = ({ item }: any) => {
    return <>
      <Pressable onPress={() => goToDetail(item.id)}>
        <View>
          <Text style={{ fontSize: 30 }}>{item.name}</Text>
          <Image
            style={{ width: '100%', height: 200 }}
            source={{
              uri: item.img,
            }}
          />
        </View>

      </Pressable>

    </>
  }

  return (<>
    <FlatList
      data={homeData}
      renderItem={renderItem}
    />
  </>
  )
}

export default HomeScreen
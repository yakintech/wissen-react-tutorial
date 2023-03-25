import { View, Text, FlatList, Image, Pressable } from 'react-native'
import React from 'react'
import { homeData } from '../../data/homeData'

const HomeScreen = ({ navigation }: any) => {

  const goToDetail = (item: any) => {
    navigation.navigate('MuseumDetail', {
      item: item
    })
  }

  const renderItem = ({ item }: any) => {
    return <>
      <Pressable onPress={() => goToDetail(item)}>
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
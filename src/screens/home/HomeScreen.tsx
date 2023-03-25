import { View, Text, FlatList, Image, Pressable, Button } from 'react-native'
import React from 'react'
import { homeData } from '../../data/homeData'
import { useDispatch } from 'react-redux'
import { add } from '../../store/favoritesSlice'
import { FavToStorage } from '../../util/FavToStorage'

const HomeScreen = ({ navigation }: any) => {

  const goToDetail = (item: any) => {
    navigation.navigate('MuseumDetail', {
      item: item
    })
  }

  let dispatch = useDispatch();

  const addToFav = (item: any) => {
    
    dispatch(add(item))
    let favToStorage = new FavToStorage();
    favToStorage.addToFav(item);
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
          <Button title='add' onPress={() => addToFav(item)}></Button>
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
import { View, Text, FlatList, Image, Pressable, Button } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  remove } from '../../store/favoritesSlice'
import { HomeModel } from '../../models/HomeModel'
import FavoriteReducer from '../../store/favoritesSlice'


const FavoritesScreen = ({ navigation }: any) => {

  type IRootState = ReturnType<typeof FavoriteReducer>;
  let state = useSelector<IRootState, HomeModel[]>(state => state.favorites);
  

  const goToDetail = (item: any) => {
    navigation.navigate('MuseumDetail', {
      item: item
    })
  }

  let dispatch = useDispatch();

  const removeToFav = (item: any) => {

    dispatch(remove(item))
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
          <Button title='remove' onPress={() => removeToFav(item)}></Button>
        </View>

      </Pressable>

    </>
  }

  return (<>
    <FlatList
      data={state}
      renderItem={renderItem}
    />
  </>
  )


  return (<>

  </>)
}

export default FavoritesScreen
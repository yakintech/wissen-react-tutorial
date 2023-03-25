import { View, FlatList, Image, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { homeData } from '../../data/homeData'
import { add, remove } from '../../store/favoritesSlice'
import { FavToStorage } from '../../util/FavToStorage'
import { Button, Card, Text } from 'react-native-paper';
import FavoriteReducer from '../../store/favoritesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { HomeModel } from '../../models/HomeModel'
import Contacts from 'react-native-contacts';


const HomeScreen = ({ navigation }: any) => {

  type IRootState = ReturnType<typeof FavoriteReducer>;
  let favorites = useSelector<IRootState, HomeModel[]>(state => state.favorites);


  useEffect(() => {


    // var newPerson : Contacts.Contact = {
    //   note:'',
    //   displayName:'YETER',
    //   recordID: '6b2237ee0df85980',
    //   backTitle: '',
    //   company: '',
    //   emailAddresses: [{
    //     label: 'work',
    //     email: 'carl-jung@example.com',
    //   }],
    //   familyName: 'Yıldız',
    //   givenName: 'ÇAĞATAY',
    //   middleName: '',
    //   jobTitle: '',
    //   phoneNumbers: [{
    //     label: 'mobile',
    //     number: '(555) 555-5555',
    //   }],
    //   hasThumbnail: true,
    //   thumbnailPath: 'content://com.android.contacts/display_photo/3',
    //   postalAddresses: [{
    //     label: 'home',
    //     formattedAddress: '',
    //     street: '123 Fake Street',
    //     pobox: '',
    //     neighborhood: '',
    //     city: 'Sample City',
    //     region: 'CA',
    //     state: 'CA',
    //     postCode: '90210',
    //     country: 'USA',
    //   }],
    //   prefix: 'MR',
    //   suffix: '',
    //   department: '',
    //   birthday: {'year': 1988, 'month': 1, 'day': 1 },
    //   imAddresses: [
    //     { username: '0123456789', service: 'ICQ'},
    //     { username: 'johndoe123', service: 'Facebook'}
    //   ],
    //   isStarred: false,
    // }
    
    // Contacts.addContact(newPerson)


    // Contacts.getAll().then(contacts => {
    //   contacts.forEach(item => {
    //     console.log('Item', item.phoneNumbers[0]?.number);
        
    //   })
      
    // })
  }, [])


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

  const removeToFav = (item: any) => {

    dispatch(remove(item))
    let favToStorage = new FavToStorage();
    favToStorage.removeToFav(item);
  }

  const renderItem = ({ item }: any) => {

    let isFavorite = favorites.find(q => q.id == item.id)
    return <>
      <Card>
        <Pressable onPress={() => goToDetail(item)}>
          <Card.Content>
            <Text variant="titleLarge">{item.name}</Text>
            <Text variant="bodyMedium">{item.description}</Text>
          </Card.Content>
          <Card.Cover source={{ uri: item.img }} />
        </Pressable>

        <Card.Actions>
          {
            isFavorite != undefined ? <Button onPress={() => removeToFav(item)}>Remove to favorites</Button> : <Button onPress={() => addToFav(item)}>Add to favorites</Button>
          }
        </Card.Actions>
      </Card>
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
import { NavigationContainer } from '@react-navigation/native';
import TabMain from './src/navigation/TabMain';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import FavoritesReducer from './src/store/favoritesSlice'

function App() {

  const store = configureStore({
    reducer: FavoritesReducer
  })

  return (<>
    <Provider store={store}>
      <NavigationContainer>
        <TabMain />
      </NavigationContainer>
    </Provider>

  </>
  )
}




export default App
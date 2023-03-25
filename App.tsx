import { View, Text, SafeAreaView, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DeviceInfo from 'react-native-device-info';
import { NavigationContainer } from '@react-navigation/native';
import TabMain from './src/navigation/TabMain';

const Tab = createBottomTabNavigator();

function App() {

  return (<>
    <NavigationContainer>
      <TabMain/>
    </NavigationContainer>

  </>
  )
}




export default App
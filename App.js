import React from 'react'
import { View, Text } from 'react-native'
import Home from "./Screens/Home"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Shirt from "./Screens/Shirt"
import Pant from "./Screens/Pant"
import Shoes from "./Screens/Shoes"
import Jacket from "./Screens/Jacket"
import AddToCard from "./Screens/AddToCard"
import BuyNow from "./Screens/BuyNow"


const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName='Home'>
        <Stack.Screen
          name="Home">{(Props) =>
            <Home {...Props} BrandName={"Top Brand"} />}
        </Stack.Screen>
        <Stack.Screen name="Shirt" component={Shirt} />
        <Stack.Screen name="Pant" component={Pant} />
        <Stack.Screen name="Shoes" component={Shoes} />
        <Stack.Screen name="Jacket" component={Jacket} />
        <Stack.Screen name="BuyNow" component={BuyNow} />
        <Stack.Screen name="AddToCard" component={AddToCard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
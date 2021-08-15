/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { RNCamera } from 'react-native-camera';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import LoginScreen from './views/LoginScreen';
import HomeScreen from './views/HomeScreen';
import AddMessage from './views/AddMessage';
import BarCodeScreen from './views/BarCodeScreen';
import ImageShow from './views/ImageShow';

export const myContext = React.createContext();
const Stack = createStackNavigator();
const Stack2 = createStackNavigator();

const AddMsg = () => {
  return (
    <Stack2.Navigator initialRouteName='Add'>
      <Stack2.Screen name='Add' component={AddMessage} />
    </Stack2.Navigator>
  )
}

const ImageShowScreen = () => {
  return (
    <Stack2.Navigator initialRouteName='ImageShow' >
      <Stack2.Screen 
      name='ImageShow' 
      component={ImageShow}  
      options={{title:'图片',headerStyle:{
        backgroundColor: '#f4511e',
      },
      headerTitleStyle:{textAlign:'center'}
      }}/>
    </Stack2.Navigator>
  )
}

const App = (props) => {
  const [todoList, setTodoList] = useState([])

  return (
    <myContext.Provider value={{ todoList, setTodoList }}>
      <NavigationContainer>
        <Stack.Navigator headerMode='card' initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Add" component={AddMsg} />
          <Stack.Screen name='CodeScanner' component={BarCodeScreen}/>
          <Stack.Screen name='ImageShow' component={ImageShowScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </myContext.Provider>
  );
};



export default App;

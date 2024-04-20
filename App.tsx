/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Game from './src/Game';
import GameBoard from './src/GameBoard';
import Settings from './src/Settings';
import PrivacyPolicy from './src/PrivacyPolicy';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Home"
          component={Game}
          options={{headerShown: false}}
        />
        <Stack.Screen name="GameBoard" component={GameBoard} options={{headerShown: false}}/>
        <Stack.Screen name="Settings" component={Settings} options={{headerBackVisible:false}}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;

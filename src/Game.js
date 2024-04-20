import React from 'react';
import { View } from 'react-native';
import PlayGame from './PlayGame'
import useColors from './hooks/useColors'


const Game = () => {
  const colors = useColors();
  return (
    <View style={[{flex:1}, colors]}>
      <PlayGame colors={colors}/>

    </View>
  )

}

export default Game;

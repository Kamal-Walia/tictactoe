import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PlayGame = props => {
  const navigation = useNavigation();
  return (
    <View
      style={[{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }, props.colors]}>
      <TouchableOpacity style={
        {
          borderWidth: 1, padding: 20, borderRadius: 10, elevation:1
        }
      }
       onPress={() => {
        navigation.navigate("GameBoard", { colors: props.colors })
      }}>
        <Text style={[{ fontSize: 50, fontWeight: '600' }, props.colors]}>Play Game</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: "10%", borderBottomWidth: 1 }} onPress={() => navigation.navigate("PrivacyPolicy")}><Text style={[{ fontSize: 20 }, props.colors]}>Privacy Policy</Text></TouchableOpacity>
    </View>
  );
};

export default PlayGame;

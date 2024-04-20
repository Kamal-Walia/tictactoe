import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker'
import { useNavigation, useRoute } from '@react-navigation/native';
import useColors from './hooks/useColors'


const Settings = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const colors = useColors();
    const [colorX, setColorX] = useState(route.params.colorX);
    const [colorY, setColorY] = useState(route.params.colorY);

    const onSelectColorX = (color) => {
        setColorX(color);
        route.params.setColorX(color)
      };

    const onSelectColorY = (color) => {
        setColorY(color);
        route.params.setColorY(color)
      };

    return (
        <View style={[{ flex: 1 }, colors]}>
            <View style={{padding:32, flexDirection:"row", justifyContent:'center', alignItems:'center', paddingHorizontal:24}}>
                <Text style={[{fontSize:24, paddingRight:20}, {color:colors.color}]}>X Color:</Text>  
            <ColorPicker
                    ref={r => { this.picker = r }}
                    color={route.params.colorX}
                    noSnap={true}
                    row={false}
                    onColorChange={onSelectColorX}
                    swatchesOnly
                    useNativeDriver={false}
                    useNativeLayout={false}
                />
                </View>
            <View style={{padding:32, flexDirection:"row", justifyContent:'center', alignItems:'center'}}>
                <Text style={[{fontSize:24, paddingRight:20}, {color:colors.color}]}>0 Color:</Text> 
            <ColorPicker
                    ref={r => { this.picker = r }}
                    color={route.params.colorY}
                    noSnap={true}
                    row={false}
                    swatchesHitSlop={{top:10, bottom:10, left:10, right:10}}
                    onColorChange={onSelectColorY}
                    swatchesOnly
                    useNativeDriver={false}
                    useNativeLayout={false}
                />
            </View>

           <View style={{alignSelf:'center', justifyContent:"center", alignItems:"center", marginTop:50}}>
            <Text style={[{fontSize:24}, {color:colors.color}]}>Selected X Color: <View style={{backgroundColor:colorX, height:20, width:20}}></View></Text>
            <Text style={[{fontSize:24}, {color:colors.color}]}>Seleted 0 Color: <View style={{backgroundColor:colorY, height:20, width:20}}/></Text>
            </View> 
            

            <TouchableOpacity onPress={() => navigation.goBack("GameBoard")} style={{alignSelf:'center', marginTop: "40%"}}>
                <Text style={[{fontSize:24, borderWidth: 1, padding: 10, borderRadius: 10, elevation:1}, {color:colors.color}]}>Save</Text>
            </TouchableOpacity>
        </View>
    )

}

export default Settings;

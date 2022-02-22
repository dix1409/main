import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

export default function text({text,onPress}){
  return (
    <View style={styles.container}>

    <Text style={styles.task}>{text}</Text>

    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    padding:15,
    backgroundColor:"#fff",
    height:50,
    justifyContent:"center",
    margin:15
  },
  task:{
    fontWeight:"bold",
    padding:20,
    color:"black"
  }
})
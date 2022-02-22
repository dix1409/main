import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import { TextInput } from 'react-native-paper';
import Tex from "./text"

export default function App() {
  const [text,settext]=React.useState(null);
  const [textarr,settextarr]=React.useState([])
  const onPress=(index)=>{
 const deltask=[...textarr];
 deltask.splice(index,1);
 settextarr(deltask);
 
  }
 
  return (

    <View style={styles.container}>
       <TextInput
      label="type somthing"
      onChangeText={text=>settext(text)}
     
      onSubmitEditing={()=>{
          settextarr([...textarr,text])
          settext("")
          
      }}
        value={text}
          
      
    />
 <View style={styles.paragraph}>
{

  textarr.map((item,index)=>{
    return (
  
    <TouchableOpacity onPress={()=>onPress(index)}>
    <Tex text={item} key={index}  />
    </TouchableOpacity>
  )})
  
}
     </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

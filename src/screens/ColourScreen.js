import React, {useState} from "react";
import { Text, StyleSheet ,View , Button,FlatList} from "react-native";

const ColourScreen = () => {
  const[color,setColor] = useState([]);

  return <View>
      <Button title="Add a colour" onPress={() => {
        setColor([...color,randomrgb()]);
      }}/>
      <FlatList 
        keyExtractor={(item) => item}
        data = {color}
        renderItem={({item}) => {
          return <View style = {{width : 100 ,height :100 , backgroundColor : item}}/>
        }}
      />
  </View> 
};

const randomrgb = () => {
  const red = Math.floor( Math.random() * 256 );
  const green = Math.floor( Math.random() * 256 );
  const blue = Math.floor( Math.random() * 256 );

  return `rgb(${red},${green},${blue})`
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColourScreen;

import React, {useState} from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";
import ColourCounter from "../components/ColourCounter";

const increment = 15;

const SquareScreen = () => {
  const [red , setRed] = useState(0);
  const [green , setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color,change) => {
    // color === 'red', 'green' , 'blue'
    // change === +15 , -15

    switch(color){
      case 'red': 
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        // if(red + change > 255 || red + change < 0){
        //   return;
        // }else{
        //   setRed(red+change);
        // }
        return;
      case 'green': 
        green + change > 255 || green + change < 0 ? null : setGreen(green + change)
        return;
      case 'blue': 
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return;
      default:
        return;
    }
  };
  
  return <View>
      <ColourCounter 
        // onIncrease = {() => setRed(red + increment)}
        // onDecrease = {() => setRed(red - increment)}
        onIncrease = {() => setColor('red' , increment)}
        onDecrease = {() => setColor('red' ,-1 * increment)}
        color = 'Red'
      />
      <ColourCounter 
        onIncrease = {() => setColor('green' , increment)}
        onDecrease = {() => setColor('green' ,-1 * increment)}
        color = 'Green'
      />
      <ColourCounter 
        onIncrease = {() => setColor('blue' , increment)}
        onDecrease = {() => setColor('blue' ,-1 * increment)}
        color = 'Blue'
      />
      <View 
        style = {{width : 100 , height : 100 , backgroundColor : `rgb(${red},${green},${blue})`}}
      />
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen;

// reducer = function that makes changes to an object 
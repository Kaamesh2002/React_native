import React from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";

const ColourCounter = ({color,onIncrease,onDecrease}) => {
  
  return <View>
      {/* <Text style={styles.text}>Red</Text>
      <Button title="Increase Red "/>
      <Button title="Decrease Red "/> */}
      <Text style={styles.text}>{color}</Text>
      <Button onPress={() => onIncrease()} title={`Increase ${color} `}/>
      <Button onPress={() => onDecrease()} title={`Decrease ${color} `}/>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ColourCounter;

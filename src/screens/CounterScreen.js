import React , {useState} from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";

const CounterScreen = () => {
    const [counter , setCounter] = useState(0);
  
  return <View>
        <Button  title="Increase" onPress={() => {setCounter(counter+1)}}/>
        <Button  title="Decrease" onPress={() => {setCounter(counter-1)}}/>
        <Text style={styles.text}>Counter count : {counter}</Text>
        {/* what piece of data is changing 
        what type of data it is
        what is the data's starting(default) value  */}
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default CounterScreen;

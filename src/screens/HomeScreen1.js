import React from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";

const HomeScreen1 = ({navigation}) => {
  
  return <View>
      <Text style={styles.text}>Lists</Text>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen1;

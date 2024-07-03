import React from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(props);
  return <View>
    <Button 
      // onPress={() => console.log('botton pressed')}
      onPress={() => navigation.navigate('Component')}
      title="COMPONENTS"
    />
    <Button 
      onPress={() => navigation.navigate('List')}
      title="LIST"
    />
    <Button 
      onPress={() => navigation.navigate('Image')}
      title="IMAGE"
    />
    <Button 
      onPress={() => navigation.navigate('Counter')}
      title="COUNTER"
    />
    <Button 
      onPress={() => navigation.navigate('Counter1')}
      title="COUNTER1"
    />
    <Button 
      onPress={() => navigation.navigate('Colour')}
      title="COLOUR"
    />
    <Button 
      onPress={() => navigation.navigate('Square')}
      title="SQUARE"
    />
    <Button 
      onPress={() => navigation.navigate('Square1')}
      title="SQUARE1"
    />
    <Button 
      onPress={() => navigation.navigate('Text')}
      title="TEXT"
    />
    <Button 
      onPress={() => navigation.navigate('Box')}
      title="BOX"
    />
    <Button 
      onPress={() => navigation.navigate('Box1')}
      title="BOX1"
    />
    {/* <TouchableOpacity onPress={()=>navigation.navigate('List')}>
      <Text style={styles.text}>Lists</Text>
    </TouchableOpacity> */}
    {/* <Text style={styles.text}>HomeScreen</Text> */}
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

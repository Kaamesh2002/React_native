import React from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return <View>   
      <ImageDetail 
        title = 'Forest'  
        source={require('../../assets/forest.jpg')} 
      />
      <ImageDetail 
        title = 'Beach' 
        source={require('../../assets/beach.jpg')} 
      />
      <ImageDetail 
        title = 'Mountain' 
        source={require('../../assets/mountain.jpg')} 
      />
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;


import React from "react";
import { Text, StyleSheet ,View , Image} from "react-native";

const ImageDetail = props => {
  return <View>  
        <Image source={props.source}/>
        <Text style={styles.text}>{props.title}</Text>
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;

import React from "react";
import { Text , View ,StyleSheet} from "react-native";

const BoxScreen1 = () => {
    return <View style = {styles.view}>
        <Text style = {styles.text1}></Text>
        <Text style = {styles.text2}></Text>
        <Text style = {styles.text3}></Text>
    </View>
};
const styles = StyleSheet.create({
    view : {
        // borderWidth : 1,
        borderColor : 'black',
        flexDirection : 'row',
        justifyContent : 'space-between',
        height:200
        // alignItems : 'flex-start' || 'flex-end' || 'center' || 'stretch'(default)
        // flexDirection : 'row' || 'column'(default)
        // justifyContent : 'center' 
    },
    text1:{
        // borderWidth : 1,
        borderColor : 'red',
        height : 70 ,
        width : 70,
        backgroundColor : 'red',
        // margin:10
    },
    text2:{
        height : 70 ,
        width : 70,
        backgroundColor:'green',
        marginTop : 70
        // alignItems : 'center'
        // position : 'absolute',
        // alignSelf : 'center',
        // margin:10
        // ...StyleSheet.absoluteFillObject
        // position : 'absolute',
        // bottom : 0,
        // right : 0
    },
    text3:{
        // borderWidth : 1,
        height : 70 ,
        width : 70,
        backgroundColor : 'purple',
        // position : 'absolute',
        // right : 0,
        // margin:10
    }
});

export default BoxScreen1;
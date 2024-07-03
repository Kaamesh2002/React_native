import React from "react";
import { Text , View ,StyleSheet } from "react-native";

const BoxScreen = () => {
    return <View style = {styles.view}>
        <Text style = {styles.text1}>Box screen1</Text>
        <Text style = {styles.text2}>Box screen2</Text>
        <Text style = {styles.text3}>Box screen3</Text>
    </View> 
};

// box-model rules === margin, border, padding
// parent : alignItems , flexDirection , justifyContent
// children : flex , alignSelf , position

const styles = StyleSheet.create({
    view : {
        borderWidth : 1,
        borderColor : 'black',
        height:200,
        // alignItems : 'flex-start' || 'flex-end' || 'center' || 'stretch'(default)
        // flexDirection : 'row' || 'column'(default)
        // justifyContent : 'center' 
    },
    text1:{
        borderWidth : 1,
        borderColor : 'red',
        // margin:10
    },
    text2:{
        borderWidth : 1,
        borderColor : 'red',
        // margin:10
        // ...StyleSheet.absoluteFillObject
        // position : 'absolute',
        // bottom : 0,
        // right : 0

    },
    text3:{
        borderWidth : 1,
        borderColor : 'red',
        // margin:10
    }
});

export default BoxScreen;
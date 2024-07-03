import React from "react";
import {StyleSheet,Text,View} from "react-native"

const ComponentScreen = ()=>{
    const greetings = 123
    const greetings1 = <Text>'hi'</Text>
    return (
        <View>
            <Text style = {styles.text}>ComponentScreen</Text>
            <Text>Hi </Text>
            <Text>{greetings}</Text>
            {greetings1}
        </View>
    )
};

const styles = StyleSheet.create({
    text : {
        fontSize:30,
    },
});

export default ComponentScreen
import React , {act, useReducer} from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";

const reducer = (state,action) => {
    // state === { count : number }
    // action === { type : 'increment' || 'decreament' , payload : 1}

    switch(action.type){
        case 'increment' :
            return {...state , count : state.count + action.payload }
        case 'decrement' :
            return {...state , count : state.count - action.payload }
        case 'default':
            return state;
    }

}

const CounterScreen1 = () => {
    const [state,dispatch] = useReducer(reducer, {count : 0 } );
  
    return <View>
        <Button  
            title="Increase" 
            onPress={() => dispatch ({type : 'increment' , payload : 1 })}
        />
        <Button  
            title="Decrease" 
            onPress={() => dispatch ({type : 'decrement' , payload : 1 })}
        />
        <Text style={styles.text}>Counter count : {state.count}</Text>
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

export default CounterScreen1;

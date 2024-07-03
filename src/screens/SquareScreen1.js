
// reducer = function that makes changes to an object 

import React, {useState,useReducer} from "react";
import { Text, StyleSheet ,View , Button,TouchableOpacity} from "react-native";
import ColourCounter from "../components/ColourCounter";

const increment = 15;

const reducer = (state , action) => {
    // state === { red : number , green : number , blue : number}
    // action === { colortochange : 'red'||'blue'||'green', amount : 15 || -15 }
    // action === { type: 'red'||'blue'||'green', payload : 15 || -15 }

    switch (action.type){
        case 'red' :
          return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state
            : { ...state, red: state.red + action.payload};
          // if(state.red + action.amount > 255 || state.red + action.amount < 0){
          //   return state; 
          // }
          // return { ...state, red: state.red + action.amount};
          // // copy state (i.e)({ red : 0 , green : 0 , blue : 0}) and overwrites red
        case 'green' :
          return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state
            : { ...state, green : state.green + action.payload};
        case 'blue' :
          return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state
            : { ...state, blue : state.blue + action.payload};
        default :
          return state;
    }
};

const SquareScreen1 = () => {
    const [state , dispatch] = useReducer(reducer,{red :0 , green : 0, blue:0 });
    const { red,green,blue } = state;
    //dispatch = runMyreducer
  return <View>
      <ColourCounter 
        // onIncrease = {() => setRed(red + increment)}
        // onDecrease = {() => setRed(red - increment)}
        onIncrease = {() => dispatch ({type : 'red', payload : increment}) }
        onDecrease = {() => dispatch ({type : 'red', payload : -1 * increment})}
        color = 'Red'
      />
      <ColourCounter 
        onIncrease = {() => dispatch ({type  : 'green', payload : increment})}
        onDecrease = {() => dispatch ({type  : 'green', payload : -1 * increment})}
        color = 'Green'
      />
      <ColourCounter 
        onIncrease = {() => dispatch ({type  : 'blue', payload: increment})}
        onDecrease = {() => dispatch ({type : 'blue', payload : -1 * increment})}
        color = 'Blue'
      />
      <View 
        style = {{width : 100 , height : 100 , backgroundColor : `rgb(${red},${green},${blue})`}}
      />
  </View> 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default SquareScreen1;


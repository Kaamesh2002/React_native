import React from "react";
import { Text, StyleSheet ,View , FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'friend 1',age: 20},
        {name: 'friend 2',age: 45},
        {name: 'friend 3',age: 32},
        {name: 'friend 4',age: 27},
        {name: 'friend 5',age: 72},
        {name: 'friend 6',age: 24},
        {name: 'friend 7',age: 25},
        {name: 'friend 8',age: 27},
        {name: 'friend 9',age: 29},
    ];
  return (
    <FlatList 
        // horizontal
        showsVerticalScrollIndicator= {false}
        keyExtractor={friends => friends.name}
        data={friends} 
        renderItem={({item}) =>{
            return <Text style = {styles.text}>{item.name} - Age {item.age}</Text>
        }}
        //element === {item:{name:'friend 1}, index :0}
        // item === {name:friend 1}
    />
  );
  
};

const styles = StyleSheet.create({
  text: {
    marginVertical: 40,
    // marginHorizontal: 10
  },
});

export default ListScreen;
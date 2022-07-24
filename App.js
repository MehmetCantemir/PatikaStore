import React from "react";
import { View , Text ,FlatList,Dimensions,Image,StyleSheet } from "react-native";

import StoreCard from './component/Card';
import myData from './data.json';



function App(){
 const renderStores = ({item})=><StoreCard card ={item}/>;
 const handleSearch=text=>{};
 //<StoreCard card ={item}/>
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
    
      <FlatList
      numColumns={2}
        data={myData}
        renderItem={renderStores}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles =StyleSheet.create({
  container:{
    flex:1,
    paddinTop:40,
  },
  headerText:{
    color:'pink',
    textAlign:"center",
    fontSize:25,
    fontWeight:'bold',
  },
 
})
  export default App ;
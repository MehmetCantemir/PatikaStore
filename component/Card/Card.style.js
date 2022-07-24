import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        margin:5,
        backgroundColor:'#E1E1E1',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#E1E1E1',
        flex:1,
        padding:-5
    },
    image:{
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
         borderTopRightRadius: 10,
         margin:10,
         borderColor:'#E1E1E1',
         resizeMode:'contain',
    },
    innerConteiner:{
        flex:1,
        flexDirection:'column',
        justifyContent:'space-between',
        marginTop:-20,
        padding:5,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,

    },
    price:{
        color:'grey',
        fontWeight:'bold',
        fontSize:15,
        marginTop:10,
    },
    instock:{
        color:'red',
        fontWeight:'bold',

    },

});
import React from "react";
import { Text , View , Image } from "react-native";
import styles from './Card.style';

const storeCards =({card})=>{
    return(
        <View style={styles.container}>
        <Image style={styles.image} source={{uri:card.imgURL}}/>
            <View style={styles.innerConteiner}>
                <Text style={styles.title}>{card.title}</Text>
                <Text style={styles.price}>{card.price}</Text>
                {!card.inStock && (
                    <Text style={styles.instock}>Stokta yoktur</Text>
                )}
            </View>
        </View>


    );
};
export default storeCards;
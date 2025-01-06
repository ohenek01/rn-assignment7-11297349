import { useNavigation } from "@react-navigation/native";
import React, { useContext } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {  DrawerActions } from '@react-navigation/native';
import { CartContext } from "../CartContext";


export default function ProductDetailScreen({route}){
    const {setCart, cart} = useContext(CartContext);
    const navigation = useNavigation();
    const {product} = route.params;

    const goToCheckout = () => {
        navigation.navigate('Checkout');
      };

    const addToCart = (item) => {
        setCart([...cart, item]);
      };
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
                <Icon name='menu' size={30} />
                </TouchableOpacity>
                <Image source={require('../assets/Logo.png')} style={styles.logo} />
                <Icon name='search' size={30} />
                <TouchableOpacity onPress={goToCheckout}>
                <FontAwesome name='shopping-bag' size={30} />
            </TouchableOpacity>
            </View>
            <Image source={{uri: product.image}} style={styles.productImage}/>
            <Text style={styles.text}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => addToCart(product)}>
                    <Icon name="add" size={30} color={'white'}/>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                    <MaterialIcons name="favorite" size={30} color={'white'}/>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 20,
    },
      logo: {
        height: 40,
        resizeMode: 'contain',
    },
    productImage: {
        height: 200,
        width: '100%',
        resizeMode: 'contain',
        marginBottom: 40,
    },
    text: {
        fontSize: 20,
        textAlign: 'leftss',
        marginBottom: 10,
        marginLeft: 20,
    },
    description: {
        fontSize: 17,
        textAlign: 'left',
        marginLeft: 20,
    },
    price:{
        color: 'red',
        fontSize: 20,
        marginBottom: 20,
        marginLeft: 20,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 250,
        backgroundColor: '#040404',
        height: 80,
    }, 
    buttonText:{
        color: 'white',
    }
})
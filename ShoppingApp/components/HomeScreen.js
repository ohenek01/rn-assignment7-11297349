import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useContext, useState } from 'react';
import { CartContext } from '../CartContext';


export default function HomeScreen() {
    const navigation = useNavigation();
    const {cart, setCart} = useContext(CartContext);

    const goToCheckout = () => {
        navigation.navigate('Checkout', {cart, setCart});
    };

    const addToCart = (item) => {
        setCart([...cart, item])
    };

    const products = [
        { id: 1, name: 'Office Wear',cartDescription: 'Office wear for your office',  description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress1.png') },
        { id: 2, name: 'Black', cartDescription: 'Recycle Boucle Knit Cardigan Pink', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress2.png') },
        { id: 3, name: 'Church Wear', cartDescription: 'Office wear for your office', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
        { id: 4, name: 'Lamerei', cartDescription: 'Recycle Boucle Knit Cardigan Pink', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress4.png') },
        { id: 5, name: '21WN', cartDescription: 'Office wear for your office', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress5.png') },
        { id: 6, name: 'Lopo', cartDescription: 'Recycle Boucle Knit Cardigan Pink', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress6.png') },
        { id: 7, name: '21WN', cartDescription: 'Office wear for your office', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress7.png') },
        { id: 8, name: 'Lame', cartDescription: 'Recycle Boucle Knit Cardigan Pink', description: 'reversible angora cardigan', price: '$120', image: require('../assets/dress3.png') },
        
    ]

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <Icon name='menu' size={30}/>
                <Image source={require('../assets/Logo.png')}/>
                <Icon name='search' size={30}/>
                <TouchableOpacity onPress={goToCheckout}><FontAwesome name='shopping-bag' size={30}/></TouchableOpacity>
            </View>
            <View style={styles.title}>
                <Text style={{fontSize: 30, fontFamily: 'helvetica'}}>OUR STORY</Text>
                <View style={styles.titleIcon}>
                    <Icon name='filter' size={30} style={styles.iconSpacing}/>    
                    <Icon name='list' size={30} style={styles.iconSpacing}/>
                </View>
            </View>
            <View style={styles.productContainer}>
                {products.map((product) => (
                    <View key={product.id} style={styles.product}>
                        <Image source={product.image}/>
                        <TouchableOpacity onPress={() => addToCart(product)}>
                            <MaterialIcons name='add-circle' size={30} style={styles.iconOverlay}/>
                        </TouchableOpacity>
                        <Text style={styles.text}>{product.name}</Text>
                        <Text style={styles.subText}>{product.description}</Text>
                        <Text style={styles.priceText}>{product.price}</Text>
                    </View>
                ))}
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
  },
  title: {
    marginHorizontal: 20,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleIcon: {
    marginTop: -5,
    flexDirection: 'row'
  },
  iconSpacing: {
    marginLeft: 30, 
  },
  productContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginHorizontal: 35,
    marginTop: 35,
  },
  product:{
    position: 'relative',
  },
  iconOverlay:{
    position: 'absolute',
    top: -35,
    right: 0,
  },
  text: {
    fontSize: 20,
    fontFamily: 'arial',
    marginTop: 15,
  },
  subText: {
    fontSize: 15,
    fontFamily: 'futura',
  },
  priceText: {
    fontSize: 20,
    color: 'orange',
    marginTop: 5,
    marginBottom: 20
  }
});
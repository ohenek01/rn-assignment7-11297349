import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CartContext } from '../CartContext';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import axios from 'axios';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=8');
        setProducts(response.data);
      } catch (error) {
        console.error(`Couldn't load Products.`);
      }
    };
    fetchProducts();
  }, []);

  const goToCheckout = () => {
    navigation.navigate('Checkout');
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const renderItem = ({ item }) => (
    <View key={item.id} style={styles.product}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <TouchableOpacity onPress={() => addToCart(item)}>
        <MaterialIcons name='add-circle' size={30} style={styles.iconOverlay} />
      </TouchableOpacity>
      <Text style={styles.text}>{item.title}</Text>
      <Text style={styles.priceText}>${item.price}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
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
      <View style={styles.title}>
        <Text style={{ fontSize: 30, fontFamily: 'georgia' }}>OUR STORY</Text>
        <View style={styles.titleIcon}>
          <Icon name='filter' size={30} style={styles.iconSpacing} />
          <Icon name='list' size={30} style={styles.iconSpacing} />
        </View>
      </View>
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.productContainer}
        showsVerticalScrollIndicator={false}
      />
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
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  product: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  iconOverlay: {
    position: 'absolute',
    top: -30,
    left: 50,
  },
  text: {
    fontSize: 20,
    fontFamily: 'arial',
    marginTop: 15,
    textAlign: 'center',
  },
  priceText: {
    fontSize: 20,
    color: 'orange',
    marginTop: 5,
    marginBottom: 20,
    textAlign: 'center',
  },
});

import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { CartContext } from '../CartContext';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export default function Checkout() {
  const navigation = useNavigation();
  const { cart, setCart } = useContext(CartContext);

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Icon name="menu" size={30} />
          </TouchableOpacity>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
          <Icon name='search' size={30} style={styles.search} />
        </View>
        <View style={styles.headTextContainer}>
          <Text style={styles.headText}>CHECKOUT</Text>
        </View>
        <View style={styles.cartContainer}>
          {cart.map((item, index) => (
            <View key={index} style={styles.cartItem}>
              <Image source={{uri: item.image}} style={styles.cartImage} />
              <View style={styles.cartTextContainer}>
                <Text style={styles.cartText}>{item.title}</Text>
                <Text style={styles.cartSubText}>{item.description}</Text>
                <Text style={styles.cartPriceText}>{item.price}</Text>
                <TouchableOpacity onPress={() => removeFromCart(index)}>
                  <Icon name='remove-circle' color='red' size={25} style={styles.iconOverlay} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
                    <Icon name="add" size={30} color={'white'}/>
                    <Text style={styles.buttonText}>Add to Cart</Text>
                    <MaterialIcons name="favorite" size={30} color={'white'}/>
                </TouchableOpacity>
              </View>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
  },
  search: {
    marginLeft: 130,
  },
  logo: {
    marginLeft: 140,
  },
  headTextContainer: {
    marginTop: 35,
    alignSelf: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    paddingBottom: 5,
    width: '50%',
  },
  headText: {
    fontSize: 20,
    alignSelf: 'center',
    paddingBottom: 5,
    fontFamily: 'georgia'
  },
  cartContainer: {
    marginTop: 40,
    flexDirection: 'column',
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 20,
    
  },
  cartImage: {
    width: 100,
    height: 150,
    marginRight: 20,
  },
  cartTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  cartText: {
    fontSize: 18,
    fontFamily: 'arial',
    textTransform: 'uppercase'
  },
  cartSubText: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 10,
    marginTop: 10,
  },
  cartPriceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange'
  },
  iconOverlay: {
    position: 'absolute',
    bottom: -3,
    left: 200,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 450,
    marginLeft: -120,
    backgroundColor: '#040404',
    height: 80,
    width: 410,
}, 
buttonText:{
    color: 'white',
},
});

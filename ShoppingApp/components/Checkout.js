import { useNavigation, useRoute } from '@react-navigation/native';
import { useContext } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../CartContext';

export default function Checkout() {
    const route = useRoute();
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
                    <Image source={require('../assets/Logo.png')} style={styles.logo} />
                    <Icon name='search' size={30} style={styles.search} />
                </View>
                <View style={styles.headTextContainer}>
                    <Text style={styles.headText}>CHECKOUT</Text>
                </View>
                <View style={styles.cartContainer}>
                    {cart.map((item, index) => (
                        <View key={index} style={styles.cartItem}>
                            <Image source={item.image} style={styles.cartImage} />
                            <View style={styles.cartTextContainer}>
                                <Text style={styles.cartText}>{item.name}</Text>
                                <Text style={styles.cartSubText}>{item.cartDescription}</Text>
                                <Text style={styles.cartPriceText}>{item.price}</Text>
                                <TouchableOpacity onPress={() => removeFromCart(index)}><Icon name='remove-circle' color= 'red' size={25} style={{marginLeft: 190, marginTop: 20}}/></TouchableOpacity>
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
});

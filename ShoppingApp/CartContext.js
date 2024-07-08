import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

useEffect(() => {
    const loadCart = async () => {
        try{
            const storedCart = await AsyncStorage.getItem('cart');
            if (storedCart !== null){
                setCart(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error('Failed to load cart from storage', error);
        }
    };

    loadCart();
}, []);

const updateCart = async(newCart) => {
    try{
        setCart(newCart);
        await AsyncStorage.setItem('cart', JSON.stringify(newCart));
    }catch(error) {
        console.error('Failed to update cart in storage', error);
    }
};

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    );
};

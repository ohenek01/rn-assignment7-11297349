import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Checkout from './components/Checkout';
import HomeScreen from './components/HomeScreen';
import CustomDrawerContent from './components/CustomDrawerContent';
import { CartProvider } from './CartContext';
import ProductDetailScreen from './components/ProductDetailScreen';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetailScreen" component={ProductDetailScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Homes"
            component={HomeStack}
            options={{
              headerShown: false,
              drawerLabel: 'Home'
            }}
          />
          <Drawer.Screen
            name="Checkout"
            component={Checkout}
            options={{
              headerShown: false,
              drawerLabel: 'Checkout'
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

import 'react-native-gesture-handler';
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Checkout from './components/Checkout';
import HomeScreen from './components/HomeScreen';
import { CartProvider } from './CartContext';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const navigation = useNavigation();

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
          <Drawer.Screen
            name="Home"
            component={HomeScreen}
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

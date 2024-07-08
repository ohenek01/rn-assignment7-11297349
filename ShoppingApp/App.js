import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Checkout from './components/Checkout';
import HomeScreen from './components/HomeScreen';
import { CartProvider } from './CartContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <CartProvider>
    <NavigationContainer>
      <Stack.Navigator
    intialRouteName="HomeScreen">
      <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown:false}}/>
      <Stack.Screen
      name="Checkout"
      component={Checkout}
      options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </CartProvider>
  );
}

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()} style={styles.closeIcon}>
          <Icon name="close" size={30} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>Ohene Kwadwo</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.drawerItem}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.drawerItemText}>Store</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Location</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Blog</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Jewelry</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Electronic</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.drawerItem}>
        <Text style={styles.drawerItemText}>Clothing</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'georgia',
    textTransform: 'uppercase',
    marginRight: 50,
    marginTop: 20,
  },
  closeIcon: {
    padding: 5,
    marginRight: 200
  },
  drawerItem: {
    padding: 10,
    marginTop: 20
  },
  drawerItemText: {
    fontSize: 24,
    fontFamily: 'gill sans',
  },
  titleContainer:{
    borderBottomWidth: 1.2,
    borderBottomColor: 'red',
    paddingBottom: 5,
    width: '80%',
  }
});

export default CustomDrawerContent;

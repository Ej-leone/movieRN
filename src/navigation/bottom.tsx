import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MainScreen, FavouriteScreen} from '../screens';
import {Image} from 'react-native';

const Tab = createBottomTabNavigator();

function MainNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={MainScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30}}
              source={require('../asset/home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 30, height: 30}}
              source={require('../asset/favourite.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigation;

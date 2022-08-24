import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DetailsScreen, PersonScreen} from '../screens';
import MainNavigation from './bottom';

export type RootStackParamList = {
  Main: undefined;
  Show: {showId: string};
  Episode: undefined; //{sort: 'latest' | 'top'} | undefined;
  People: {userId: string};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Main"
        component={MainNavigation}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen name="Show" component={DetailsScreen} />

      <RootStack.Screen name="People" component={PersonScreen} />
    </RootStack.Navigator>
  );
};

export default AppNavigation;

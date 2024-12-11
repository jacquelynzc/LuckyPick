import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import QuickPickScreen from './src/screens/QuickPickScreen';
import PersonalizedPicksScreen from './src/screens/PersonalizedPicksScreen';
import TrendsScreen from './src/screens/TrendsScreen';
import PoolScreen from './src/screens/PoolScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Trends" component={TrendsScreen} />
    <Tab.Screen name="Pool" component={PoolScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="QuickPick" component={QuickPickScreen} />
        <Stack.Screen name="PersonalizedPicks" component={PersonalizedPicksScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

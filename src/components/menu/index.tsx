import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Home } from '../../screens/home'
import { Charts } from '../../screens/charts'
import { IconButton } from 'native-base';

export type BottomTabParamList = {
  Home: undefined;
  Charts: undefined;
  Search: undefined;
  New: undefined;
}
const Tab = createBottomTabNavigator<BottomTabParamList>();

export const Menu = () => {
  return (
      <Tab.Navigator 
      initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-library'
                : 'ios-library-outline';
            } else if (route.name === 'Charts') {
              iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
            } else if (route.name === 'New') {
              iconName = focused ? 'ios-add-circle' : 'ios-add-circle-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#377971',
          tabBarInactiveTintColor: 'black'
        })}
      >
        <Tab.Screen 
          name="Charts" 
          component={Charts} 
          options={{
            title: 'Gráficos',
          }}
        />
        <Tab.Group
        screenOptions={({ navigation }) => ({
          headerRight: () => <IconButton onPress={() => navigation.navigate('Run')} title='nova corrida'><Ionicons name='ios-add-circle' size={20} color='#377971'/></IconButton>,
        })}
        >
          <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
              title: 'Diário de Corridas',
            }}
          />
        </Tab.Group>
        <Tab.Screen 
          name="Search" 
          component={Home} 
          options={{
            title: 'Busca',
          }}
          />
      </Tab.Navigator>
  )
}
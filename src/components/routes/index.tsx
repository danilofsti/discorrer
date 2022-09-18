import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { SigIn } from '../../screens/signin'
import { Register } from '../../screens/register'
import { Splash } from '../../screens/splash'
import { Run } from '../../screens/run'
import { Menu } from '../menu'
import { Details } from '../../screens/details';
import { Moods } from '../../enum/moods';

const {Screen, Navigator, Group} = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Navigator 
        initialRouteName="Splash"
      >
        <Group
          screenOptions= {{
            headerShown: false,
          }}
        >
          <Screen name="Splash" component={Splash} />
          <Screen name="TabBar" component={Menu} 
          options={{
            title: 'Home',
          }}/>
          <Screen name="SignIn" component={SigIn} />
          <Screen name="Register" component={Register} />
        </Group>
        <Group screenOptions={({ navigation }) => ({
          headerRight: () => <IconButton onPress={() => navigation.navigate('TabBar')} title='nova corrida'><Ionicons name='ios-close-sharp' size={20} color='tomato'/></IconButton>,
        })}>
          <Screen name="Run" component={Run} 
            options={{
              title: 'Nova Corrida',
            }} />
          <Screen name="Details" component={Details} 
            options={{
              title: 'Detalhes da Corrida',
            }}
            />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

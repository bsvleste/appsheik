import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import DetalhesScreen from './pages/Detalhes';
const Stack = createStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Detalhes" component={DetalhesScreen}/>
        </Stack.Navigator>
    )
}
export default Routes;
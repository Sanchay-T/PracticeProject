
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';

const Stack = createStackNavigator();




function App() {
    return (
        

        
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
              header: () => null
            }}
            >
                <Stack.Screen
                    name="Screen_A"
                    component={ScreenA}
                // options={{
                //   header: () => null
                // }}
                />
                <Stack.Screen
                    name="Screen_B"
                    component={ScreenB}
                />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})

export default App;
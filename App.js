
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import LoginScreen from './Components/LoginScreen';
import HomeScreen from './Components/HomeScreen';
import RecommendationScreen from './Components/RecommendationScreen';

//https://codingbeautydev.com/blog/react-button-link/#:~:text=To%20use%20a%20button%20as%20a%20link%20in%20React%2C%20wrap,navigate%20to%20the%20specified%20URL.
//page linking
export default function App() {
  

  return (
    <NavigationContainer>
      
      <Stack.Navigator>
        <Stack.Screen name="Recommendations" component={RecommendationScreen} />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
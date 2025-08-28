import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import ChildProfileScreen from '../screens/onboarding/ChildProfileScreen';

export type OnboardingStackParamList = {
  Welcome: undefined;
  ChildProfile: undefined;
};

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

export default function OnboardingNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="ChildProfile" component={ChildProfileScreen} options={{ title: 'Child Profile' }} />
    </Stack.Navigator>
  );
}

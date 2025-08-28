import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from './RootNavigator';
import EditProfileModal from '../screens/profile/EditProfileModal';

export type RootStackParamList = {
  Root: undefined;
  EditProfile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="EditProfile" component={EditProfileModal} options={{ presentation: 'modal', title: 'Edit Profile' }} />
    </Stack.Navigator>
  );
}

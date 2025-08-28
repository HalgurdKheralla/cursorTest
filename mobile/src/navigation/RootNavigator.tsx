import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';
import LearnScreen from '../screens/LearnScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigator from './AuthNavigator';
import MainTabs from './MainTabs';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const isAuthenticated = useSelector((s: RootState) => s.auth.isAuthenticated);

  return isAuthenticated ? <MainTabs /> : <AuthNavigator />;
}

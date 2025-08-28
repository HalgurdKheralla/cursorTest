import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import RootStack from './src/navigation/RootStack';
import OnboardingNavigator from './src/navigation/OnboardingNavigator';
import { store, RootState } from './src/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';

function AppContent() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';
  const onboardingComplete = useSelector((s: RootState) => s.preferences.onboardingComplete);

  // Navigation state persistence
  const PERSISTENCE_KEY = 'NAVIGATION_STATE_V1';
  const [initialState, setInitialState] = useState<any>();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = savedStateString ? JSON.parse(savedStateString) : undefined;
        if (state) setInitialState(state);
      } finally {
        setIsReady(true);
      }
    })();
  }, []);

  if (!isReady) return null;

  return (
    <NavigationContainer
      theme={isDark ? DarkTheme : DefaultTheme}
      initialState={initialState}
      onStateChange={(state) => AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))}
    >
      {onboardingComplete ? <RootStack /> : <OnboardingNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});

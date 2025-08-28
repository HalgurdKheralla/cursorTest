import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MinMap</Text>
      <Text style={{ marginBottom: 16 }}>Let’s set up your experience.</Text>
      <Button title="Continue" onPress={() => navigation.navigate('ChildProfile')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
});

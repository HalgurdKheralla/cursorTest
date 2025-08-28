import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { setOnboardingComplete } from '../../store/slices/preferencesSlice';

export default function ChildProfileScreen() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Child Profile</Text>
      <TextInput style={styles.input} placeholder="Child name" value={name} onChangeText={setName} />
      <Button title="Finish" onPress={() => dispatch(setOnboardingComplete(true))} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 16 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, marginBottom: 12 },
});

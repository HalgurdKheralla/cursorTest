import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../store';
import { signOut } from '../store/slices/authSlice';
import { supabase } from '../lib/supabase';

export default function ProfileScreen() {
  const dispatch = useDispatch();
  const email = useSelector((s: RootState) => s.auth.userEmail);
  const navigation = useNavigation<any>();

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
    } finally {
      dispatch(signOut());
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      {email ? <Text style={{ marginBottom: 12 }}>{email}</Text> : null}
      <Button title="Edit Profile" onPress={() => navigation.navigate('EditProfile')} />
      <View style={{ height: 12 }} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
});

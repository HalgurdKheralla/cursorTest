import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ShopStackParamList } from '../../navigation/ShopNavigator';

type Props = NativeStackScreenProps<ShopStackParamList, 'ProductDetail'>;

export default function ProductDetailScreen({ route }: Props) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product {id}</Text>
      <Text>Details coming soon.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 8 },
});

import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet, TextInput, Button } from 'react-native';
import { useGetProductsQuery } from '../../services/productsApi';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ShopStackParamList } from '../../navigation/ShopNavigator';

type Props = NativeStackScreenProps<ShopStackParamList, 'ShopHome'>;

export default function ProductListScreen({ navigation }: Props) {
  const [filter, setFilter] = useState('');
  const { data, isLoading } = useGetProductsQuery();
  const list = data ?? [];
  const filtered = filter ? list.filter((p) => p.title.toLowerCase().includes(filter.toLowerCase())) : list;

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.input} placeholder="Filter" value={filter} onChangeText={setFilter} />
        <Button title="Search" onPress={() => navigation.navigate('Search')} />
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ProductDetail', { id: item.id })}>
            <Text style={styles.item}>{item.title}</Text>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        ListEmptyComponent={<Text>{isLoading ? 'Loading...' : 'No products'}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { fontSize: 16, paddingVertical: 8 },
  searchRow: { flexDirection: 'row', gap: 8, marginBottom: 12, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
});

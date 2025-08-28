import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { useSearchProductsQuery } from '../../services/productsApi';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [term, setTerm] = useState<string>('');
  const { data, isFetching, refetch } = useSearchProductsQuery(term, { skip: term.length === 0 });
  const results = data ?? [];
  const handleSearch = () => setTerm(query);

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.input} placeholder="Search products" value={query} onChangeText={setQuery} />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
        ListEmptyComponent={<Text>{isFetching ? 'Searching...' : 'No results'}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchRow: { flexDirection: 'row', gap: 8, marginBottom: 12, alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10 },
  item: { paddingVertical: 8 },
});

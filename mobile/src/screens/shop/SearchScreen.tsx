import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';

export default function SearchScreen() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<{ id: string; name: string }[]>([]);

  const handleSearch = () => {
    // Placeholder: wire to RTK Query later
    setResults(query ? [{ id: '1', name: `Result for ${query}` }] : []);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchRow}>
        <TextInput style={styles.input} placeholder="Search products" value={query} onChangeText={setQuery} />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <FlatList
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        ListEmptyComponent={<Text>No results</Text>}
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

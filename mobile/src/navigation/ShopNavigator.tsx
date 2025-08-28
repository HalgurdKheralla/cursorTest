import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/shop/ProductListScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import SearchScreen from '../screens/shop/SearchScreen';

export type ShopStackParamList = {
  ShopHome: undefined;
  ProductDetail: { id: string };
  Search: { q?: string } | undefined;
};

const Stack = createNativeStackNavigator<ShopStackParamList>();

export default function ShopNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ShopHome" component={ProductListScreen} options={{ title: 'Shop' }} />
      <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: 'Product' }} />
    </Stack.Navigator>
  );
}

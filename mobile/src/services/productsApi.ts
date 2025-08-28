import { api } from './api';

export interface ProductSummary {
  id: string;
  title: string;
}

export interface ProductsResponse {
  products: { id: number; title: string }[];
}

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<ProductSummary[], void>({
      query: () => '/products?limit=20',
      transformResponse: (resp: ProductsResponse) => resp.products.map((p) => ({ id: String(p.id), title: p.title })),
      providesTags: (result) => result ? [{ type: 'Products', id: 'LIST' }] : [],
    }),
    searchProducts: build.query<ProductSummary[], string>({
      query: (q) => `/products/search?q=${encodeURIComponent(q)}`,
      transformResponse: (resp: ProductsResponse) => resp.products.map((p) => ({ id: String(p.id), title: p.title })),
    }),
  }),
});

export const { useGetProductsQuery, useSearchProductsQuery } = productsApi;

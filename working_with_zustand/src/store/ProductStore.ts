import {create} from 'zustand';
import {fetchProductsApi} from '../services/product'

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductsStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  products: Product[];
  fetchProducts: () => Promise<void>;
}

const useProductsStore = create<ProductsStore>((set) => ({
  loading: false,
  setLoading: (loading) => set({ loading }),
  products: [],
  fetchProducts: async () => {
    set({ loading: true });
    try {
      console.log("Fetching products...");
      const products = await fetchProductsApi();
      console.log("Products fetched successfully.");
      set({ products, loading: false });
    } catch (error) {
      console.error("Failed to fetch products:", error);
      set({ loading: false });
    }
  },
}));



export default useProductsStore;

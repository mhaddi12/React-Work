import {create} from 'zustand';

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
  fetchProducts: () => Promise<void>; // Renamed for clarity
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
      set({ loading: false }); // Ensure loading is turned off in case of failure
    }
  },
}));

// Function to fetch products from API
const fetchProductsApi = async (): Promise<Product[]> => {
  console.log("Making API call...");
  const res = await fetch("https://fakestoreapi.com/products/");
  if (!res.ok) {
    throw new Error(`Error fetching products: ${res.statusText}`);
  }
  const data: Product[] = await res.json();
  console.log("API call completed.");
  return data;
};

export default useProductsStore;

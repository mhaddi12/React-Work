export const fetchProductsApi = async (): Promise<Product[]> => {
    console.log("Making API call...");
    const res = await fetch("https://fakestoreapi.com/products/");
    if (!res.ok) {
      throw new Error(`Error fetching products: ${res.statusText}`);
    }
    const data: Product[] = await res.json();
    console.log("API call completed.");
    return data;
  };
  
  interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  }
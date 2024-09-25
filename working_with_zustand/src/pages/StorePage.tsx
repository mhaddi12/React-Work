import { useEffect } from "react";
import "../store.css";
import useProductsStore from "../store/ProductStore";
import { GetProduct } from "../components/GetProduct";

const StorePage = () => {
  const loadProducts = useProductsStore((state) => state.fetchProducts);
  const loading = useProductsStore((state) => state.loading);

  useEffect(() => {
    const fetchData = async () => {
      await loadProducts();
    };
    fetchData();
  }, [loadProducts]);

  console.log("component");

  return (
    <div className="container">
      <h1 className="my-4 text-center">Products</h1>
      {loading && (
        <center>
          <h1 className="text-center d-flex justify-content-center align-items-center">
            Loading...
          </h1>
        </center>
      )}
      <hr />
      <GetProduct />
    </div>
  );
};

export default StorePage;

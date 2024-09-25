import { useEffect } from "react";
import "../store.css";
import useProductsStore from "../store/ProductStore";
import { GetProduct } from "../components/GetProduct";

const StorePage = () => {
  const loadProducts = useProductsStore((state) => state.fetchProducts);
  const loading = useProductsStore((state) => state.loading);

  useEffect(() => {
    loadProducts();

    return () => {
      console.log("StorePage component unmounted.");
    };
  }, [loadProducts]);

  console.log("StorePage component rendered");

  return (
    <div className="container">
      <h1 className="my-4 text-center">Products</h1>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center vh-50">
          <h2 className="text-center">Loading...</h2>
        </div>
      ) : (
        <>
          <hr />
          <GetProduct />
        </>
      )}
    </div>
  );
};

export default StorePage;

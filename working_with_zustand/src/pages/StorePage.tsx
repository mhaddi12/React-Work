import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../store.css"; 
import useProductsStore from "../store/product";

const GetProduct = () => {
  const products = useProductsStore((state) => state.products);
  console.log("component re render", products);

  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-md-4 mb-4" key={p.id}>
          <div className="card h-100 product-card shadow-sm">
            <div className="card-img-container">
              <img
                src={p.image}
                className="card-img-top product-image"
                alt={p.title}
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{p.title}</h5>
              <p className="card-text">${p.price}</p>
              <Link
                to={`/store/dp/${p.id}`}
                className="btn btn-primary btn-block"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

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
          <h1>Loading...</h1>
        </center>
      )}
      <hr />
      <GetProduct />
    </div>
  );
};

export default StorePage;

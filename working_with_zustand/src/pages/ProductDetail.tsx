import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useProductsStore from "../store/ProductStore";
import "../productDetail.css";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <h2 className="text-center">Product not found</h2>;
  }

  const products = useProductsStore((state) => state.products);
  const fetchProducts = useProductsStore((state) => state.fetchProducts);
  const loading = useProductsStore((state) => state.loading);

  const product = products.find((p) => p.id === parseInt(id));

  useEffect(() => {
    if (!product) {
      fetchProducts();
    }
  }, [product, fetchProducts]);

  if (loading || !product) {
    return <h2 className="text-center">Loading...</h2>;
  }

  return (
    <div className="container mt-5 product-detail-container">
      <div className="row">
        <div className="col-md-6 text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid product-image-detail"
          />
        </div>
        <div className="col-md-6 product-info">
          <h2 className="product-title">{product.title}</h2>
          <h4 className="product-price">${product.price.toFixed(2)}</h4>
          <p className="product-description">{product.description}</p>
          <p className="product-category">
            <strong>Category: </strong>
            {product.category}
          </p>
          <Link
            to="/store"
            className="btn btn-outline-primary product-back-btn"
          >
            Back to Store
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

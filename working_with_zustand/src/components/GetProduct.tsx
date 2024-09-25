import { Link } from "react-router-dom";
import useProductsStore from "../store/ProductStore";
import "./GetProduct.css"; // Import the custom CSS

export const GetProduct = () => {
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
              <h5 className="card-title text-truncate" title={p.title}>
                {p.title}
              </h5>
              <p className="card-text font-weight-bold text-success">
                ${p.price.toFixed(2)}
              </p>
              <Link
                to={`/store/dp/${p.id}`}
                className="btn btn-outline-primary btn-block custom-btn"
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

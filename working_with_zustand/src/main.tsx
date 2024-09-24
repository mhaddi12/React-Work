import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StorePage from "./pages/StorePage.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="store" element={<StorePage />} />
        <Route path="store/dp/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

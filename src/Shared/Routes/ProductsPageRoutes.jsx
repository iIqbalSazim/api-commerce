import { Routes, Route } from "react-router-dom";

import ProductPage from "../../Pages/ProductsContainer/Components/ProductPage/ProductPage";
import ProductsContainer from "../../Pages/ProductsContainer/ProductsContainer";

const ProductsPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductsContainer />} />
      <Route path="/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default ProductsPageRoutes;

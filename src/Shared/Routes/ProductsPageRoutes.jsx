import { Routes, Route } from "react-router-dom";

import ProductPage from "../../Pages/DisplayProducts/Components/ProductPage/ProductPage";
import DisplayProducts from "../../Pages/DisplayProducts/DisplayProducts";

const ProductsPageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DisplayProducts />} />
      <Route path="/:id" element={<ProductPage />} />
    </Routes>
  );
};

export default ProductsPageRoutes;

import { useEffect, useState } from "react";

import ProductsGrid from "./Components/ProductsGrid/ProductsGrid";

import { StyledGridWrapper } from "./DisplayProductsStyles";
import { fetchAllProducts } from "../DisplayProducts/Api/Methods";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let res = await fetchAllProducts();
    setProducts(res.data.products);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <StyledGridWrapper>
        <ProductsGrid products={products} />
      </StyledGridWrapper>
    </>
  );
};

export default DisplayProducts;

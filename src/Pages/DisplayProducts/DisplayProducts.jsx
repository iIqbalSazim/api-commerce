import { useEffect, useState } from "react";

import AddProduct from "./Components/AddProduct/AddProduct";
import ProductsGrid from "./Components/ProductsGrid/ProductsGrid";

import { StyledGridWrapper } from "./DisplayProductsStyles";
import {
  fetchAllCateogories,
  fetchAllProducts,
} from "../DisplayProducts/Api/Methods";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const getProductsData = async () => {
    if (JSON.parse(localStorage.getItem("products"))) {
      setProducts(JSON.parse(localStorage.getItem("products")));
    } else {
      let res = await fetchAllProducts();
      localStorage.setItem("products", JSON.stringify(res.data.products));
      setProducts(res.data.products);
    }
  };

  const getCategoriesData = async () => {
    let res = await fetchAllCateogories();
    setCategories(res.data);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, [products]);

  const setNewProduct = (newProduct) => {
    setProducts([...products, newProduct]);
    localStorage.setItem("products", JSON.stringify([...products, newProduct]));
  };

  return (
    <>
      <AddProduct setNewProduct={setNewProduct} categories={categories} />
      <StyledGridWrapper>
        <ProductsGrid products={products} />
      </StyledGridWrapper>
    </>
  );
};

export default DisplayProducts;

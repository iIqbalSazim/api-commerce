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
    if (JSON.parse(localStorage.getItem("categories"))) {
      setCategories(JSON.parse(localStorage.getItem("categories")));
    } else {
      let res = await fetchAllCateogories();
      localStorage.setItem("categories", JSON.stringify(res.data));
      setCategories(res.data);
    }
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

  const updateEditedProduct = (editedProduct) => {
    const editedProductIndex = products.findIndex(
      (product) => product.id === editedProduct.id
    );
    const updatedProducts = [...products];
    updatedProducts[editedProductIndex] = editedProduct;

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <AddProduct setNewProduct={setNewProduct} categories={categories} />
      <StyledGridWrapper>
        <ProductsGrid
          products={products}
          updateEditedProduct={updateEditedProduct}
          categories={categories}
        />
      </StyledGridWrapper>
    </>
  );
};

export default DisplayProducts;

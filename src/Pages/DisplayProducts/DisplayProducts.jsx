import { useEffect, useState } from "react";

import AddProduct from "./Components/AddProduct/AddProduct";
import ProductCard from "./Components/ProductCard/ProductCard";

import {
  fetchAllCateogories,
  fetchAllProducts,
} from "../DisplayProducts/Api/Methods";
import { StyledGridWrapper } from "./DisplayProductsStyles";

const DisplayProducts = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategoriesData();
  }, []);

  useEffect(() => {
    if (products.length === 0) {
      getProductsData();
    }
  }, [products]);

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

  const deleteProduct = (productToBeDeleted) => {
    const deletedProductIndex = products.findIndex(
      (product) => product.id === productToBeDeleted.id
    );

    const updatedProducts = [...products];
    updatedProducts[deletedProductIndex] = productToBeDeleted;

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  return (
    <>
      <AddProduct setNewProduct={setNewProduct} categories={categories} />
      <StyledGridWrapper>
        <ProductCard
          products={products}
          updateEditedProduct={updateEditedProduct}
          deleteProduct={deleteProduct}
          categories={categories}
        />
      </StyledGridWrapper>
    </>
  );
};

export default DisplayProducts;

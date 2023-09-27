import { useEffect, useState } from "react";

import AddProduct from "./Components/AddProduct/AddProduct";
import ProductCard from "./Components/ProductCard/ProductCard";

import { fetchAllCateogories, fetchAllProducts } from "./Api/Methods";

import { StyledGridWrapper } from "./ProductsContainerStyles";
import Loader from "../../Shared/Components/Loader/Loader";

const ProductsContainer = () => {
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
    if (JSON.parse(localStorage.getItem("categories"))) {
      setCategories(JSON.parse(localStorage.getItem("categories")));
    } else {
      let res = await fetchAllCateogories();
      localStorage.setItem("categories", JSON.stringify(res.data));
      setCategories(res.data);
    }
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

  if (!products || products.length === 0) {
    return <Loader />;
  } else {
    let filteredProducts = products.filter(
      (product) => product.isDeleted !== true
    );
    return (
      <>
        <AddProduct setNewProduct={setNewProduct} categories={categories} />
        <StyledGridWrapper>
          {filteredProducts.map((product) => {
            return (
              <ProductCard
                key={product.id}
                product={product}
                updateEditedProduct={updateEditedProduct}
                deleteProduct={deleteProduct}
                categories={categories}
              />
            );
          })}
        </StyledGridWrapper>
      </>
    );
  }
};

export default ProductsContainer;

import {
  StyledBuyNowButton,
  StyledPrice,
  StyledProductBuyNowWrapper,
  StyledProductCard,
  StyledProductDetailsWrapper,
  StyledProductImage,
  StyledProductTitle,
} from "./ProductsGridStyles";
import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../Api/Methods";

const ProductsGrid = () => {
  const [products, setProducts] = useState([]);

  const getData = async () => {
    let res = await fetchAllProducts();
    if (res) {
      setProducts(res.data.products);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!products || products.length === 0) {
    return <div>...loading placeholder</div>;
  } else {
    return (
      <>
        {products.map((product) => {
          return (
            <StyledProductCard key={product.id}>
              <StyledProductImage src={product.images[0]} alt="" />
              <StyledProductDetailsWrapper>
                <StyledProductTitle>{product.title}</StyledProductTitle>
                <p>{product.description}</p>
              </StyledProductDetailsWrapper>
              <StyledProductBuyNowWrapper>
                <StyledPrice>$ {product.price}</StyledPrice>
                <StyledBuyNowButton>Buy now</StyledBuyNowButton>
              </StyledProductBuyNowWrapper>
            </StyledProductCard>
          );
        })}
      </>
    );
  }
};

export default ProductsGrid;

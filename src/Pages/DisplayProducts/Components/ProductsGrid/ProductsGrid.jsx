import {
  StyledBuyNowButton,
  StyledPrice,
  StyledProductBuyNowWrapper,
  StyledProductCard,
  StyledProductDetailsWrapper,
  StyledProductImage,
  StyledProductTitle,
} from "./ProductsGridStyles";
import { useNavigate } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  const navigate = useNavigate();

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
                <StyledBuyNowButton onClick={() => navigate(`/${product.id}`)}>
                  Buy now
                </StyledBuyNowButton>
              </StyledProductBuyNowWrapper>
            </StyledProductCard>
          );
        })}
      </>
    );
  }
};
export default ProductsGrid;

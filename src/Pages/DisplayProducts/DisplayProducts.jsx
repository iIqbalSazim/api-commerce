import ProductsGrid from "./Components/ProductsGrid/ProductsGrid";
import { StyledGridWrapper } from "./DisplayProductsStyles";

const DisplayProducts = () => {
  return (
    <>
      <StyledGridWrapper>
        <ProductsGrid />
      </StyledGridWrapper>
    </>
  );
};

export default DisplayProducts;

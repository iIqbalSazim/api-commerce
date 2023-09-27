import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  StyledProductCategory,
  StyledProductDescription,
  StyledProductPageImage,
  StyledProductPageProductDetails,
  StyledProductPageSection,
  StyledProductPageTitle,
  StyledProductRating,
  StyledProductSection,
  StyledProductStats,
} from "./ProductPageStyles";
import { AiOutlineStar } from "react-icons/ai";

import { fetchProduct } from "../../Api/Methods";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const getData = async () => {
    let res = await fetchProduct(id);
    setProduct(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (product.length === 0) {
    return <div>...Loading placeholder</div>;
  }

  return (
    <>
      <StyledProductPageSection>
        <StyledProductSection>
          <StyledProductPageImage src={product.images[0]} alt="" />
          <StyledProductPageProductDetails>
            <StyledProductPageTitle>{product.title}</StyledProductPageTitle>
            <StyledProductCategory>
              Category: {product.category.toUpperCase()}
            </StyledProductCategory>
            <StyledProductDescription>
              {product.description}
            </StyledProductDescription>
            <StyledProductStats>
              <p>Price: ${product.price}</p>
              <StyledProductRating>
                Rating: {product.rating}
                <AiOutlineStar />
              </StyledProductRating>
            </StyledProductStats>
          </StyledProductPageProductDetails>
        </StyledProductSection>
      </StyledProductPageSection>
    </>
  );
};

export default ProductPage;

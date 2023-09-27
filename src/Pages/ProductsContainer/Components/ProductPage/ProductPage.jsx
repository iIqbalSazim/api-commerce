import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";

import Loader from "../../../../Shared/Components/Loader/Loader";

import { fetchProduct } from "../../Api/Methods";

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

const ProductPage = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const getProductData = async () => {
    const localProducts = JSON.parse(localStorage.getItem("products"));

    if (localProducts) {
      const product = localProducts.find((prod) => prod.id === parseInt(id));
      setProduct(product);
    } else {
      let res = await fetchProduct(id);
      setProduct(res.data);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <StyledProductPageSection>
        {!product ? (
          <Loader />
        ) : (
          <StyledProductSection>
            <StyledProductPageImage
              src={
                product.thumbnail
                  ? product.thumbnail
                  : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
              }
              alt=""
            />
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
        )}
      </StyledProductPageSection>
    </>
  );
};

export default ProductPage;

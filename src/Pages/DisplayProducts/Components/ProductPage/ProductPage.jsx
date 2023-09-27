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
    const product = localProducts.find((prod) => prod.id === parseInt(id));

    if (product) {
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
                product.images.length !== 0
                  ? product.images[0]
                  : product.thumbnail
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

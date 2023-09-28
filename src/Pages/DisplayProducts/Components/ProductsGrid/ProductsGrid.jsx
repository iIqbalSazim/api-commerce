import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Loader from "../../../../Shared/Components/Loader/Loader";

import EditProduct from "../EditProduct/EditProduct";

import {
  StyledActionButton,
  StyledActionButtonsWrapper,
  StyledBuyNowButton,
  StyledDotsButton,
  StyledPrice,
  StyledProductBuyNowWrapper,
  StyledProductCard,
  StyledProductDetailsWrapper,
  StyledProductImage,
  StyledProductTitle,
} from "./ProductsGridStyles";

const ProductsGrid = ({ products, updateEditedProduct, categories }) => {
  const [actionsMenuOpen, setActionsMenuOpen] = useState({});
  const [editModalOpen, setEditModalOpen] = useState({});

  const navigate = useNavigate();

  const closeEditModal = (productId) => {
    setEditModalOpen({ ...editModalOpen, [productId]: false });
  };

  if (!products || products.length === 0) {
    return <Loader />;
  } else {
    return (
      <>
        {products.map((product) => {
          const isActionsMenuOpen = actionsMenuOpen[product.id] || false;
          const isEditModalOpen = editModalOpen[product.id] || false;

          return (
            <StyledProductCard key={product.id}>
              {isActionsMenuOpen ? (
                <StyledActionButtonsWrapper>
                  <StyledActionButton
                    onClick={() => {
                      setEditModalOpen({ [product.id]: true });
                      setActionsMenuOpen({ [product.id]: false });
                    }}
                  >
                    Edit product
                  </StyledActionButton>
                  <StyledActionButton>Delete product</StyledActionButton>
                </StyledActionButtonsWrapper>
              ) : null}
              {isEditModalOpen ? (
                <EditProduct
                  product={product}
                  categories={categories}
                  updateEditedProduct={updateEditedProduct}
                  closeEditModal={closeEditModal}
                />
              ) : null}
              <StyledDotsButton
                onClick={() => {
                  setActionsMenuOpen((prevOpenState) => ({
                    ...prevOpenState,
                    [product.id]: !isActionsMenuOpen,
                  }));
                }}
              >
                &#xFE19;
              </StyledDotsButton>

              <StyledProductImage
                src={
                  product.images
                    ? product.thumbnail
                    : "https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
                }
                alt=""
              />
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

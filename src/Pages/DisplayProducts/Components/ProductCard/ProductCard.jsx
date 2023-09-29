import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Loader from "../../../../Shared/Components/Loader/Loader";

import EditProduct from "../EditProduct/EditProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";

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
} from "./ProductCardStyles";

const ProductCard = ({
  products,
  updateEditedProduct,
  categories,
  deleteProduct,
}) => {
  const [actionsMenuOpen, setActionsMenuOpen] = useState({});
  const [editModalOpen, setEditModalOpen] = useState({});
  const [confirmDeleteModalOpen, setConfirmDeleteModalOpen] = useState(false);

  const navigate = useNavigate();

  const closeEditModal = (productId) => {
    setEditModalOpen({ ...editModalOpen, [productId]: false });
  };

  const closeConfirmDeleteModal = (productId) => {
    setConfirmDeleteModalOpen({
      ...confirmDeleteModalOpen,
      [productId]: false,
    });
  };

  if (!products || products.length === 0) {
    return <Loader />;
  } else {
    products = products.filter((product) => product.isDeleted !== true);

    return (
      <>
        {products.map((product) => {
          const isActionsMenuOpen = actionsMenuOpen[product.id] || false;
          const isEditModalOpen = editModalOpen[product.id] || false;
          const isConfirmDeleteModalOpen =
            confirmDeleteModalOpen[product.id] || false;

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
                  <StyledActionButton
                    onClick={() => {
                      setConfirmDeleteModalOpen({ [product.id]: true });
                      setActionsMenuOpen({ [product.id]: false });
                    }}
                  >
                    Delete product
                  </StyledActionButton>
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
              {isConfirmDeleteModalOpen ? (
                <DeleteProduct
                  product={product}
                  deleteProduct={deleteProduct}
                  closeConfirmDeleteModal={closeConfirmDeleteModal}
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

export default ProductCard;

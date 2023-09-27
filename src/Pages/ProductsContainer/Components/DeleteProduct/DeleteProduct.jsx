import { deleteProductApi } from "../../Api/Methods";

import {
  StyledConfirmDeleteModalOverlay,
  StyledConfirmDeleteModal,
  StyledTitle,
  StyledButtonsWrapper,
  StyledButton,
  StyledCloseCrossIcon,
  StyledGoBackButton,
} from "./DeleteProductStyles";

const DeleteProduct = ({ product, closeConfirmDeleteModal, deleteProduct }) => {
  const confirmDelete = async () => {
    if (localStorage.getItem("products")) {
      let currentDate = new Date();
      let productToBeDeleted = {
        ...product,
        isDeleted: true,
        deletedOn: currentDate.toISOString(),
      };
      deleteProduct(productToBeDeleted);
    } else {
      const res = await deleteProductApi(product.id);
      let deletedProduct = {
        ...product,
        isDeleted: res.data.isDeleted,
        deletedOn: res.data.deletedOn,
      };
      deleteProduct(deletedProduct);
    }
    alert("Product deleted!");
    closeConfirmDeleteModal(product.id);
  };

  return (
    <StyledConfirmDeleteModalOverlay>
      <StyledConfirmDeleteModal>
        <StyledCloseCrossIcon
          onClick={() => closeConfirmDeleteModal(product.id)}
        />
        <StyledTitle>Are you sure you want to delete this product?</StyledTitle>
        <StyledButtonsWrapper>
          <StyledGoBackButton
            onClick={() => closeConfirmDeleteModal(product.id)}
          >
            Go Back
          </StyledGoBackButton>
          <StyledButton onClick={() => confirmDelete()}>
            Yes, Delete!
          </StyledButton>
        </StyledButtonsWrapper>
      </StyledConfirmDeleteModal>
    </StyledConfirmDeleteModalOverlay>
  );
};

export default DeleteProduct;

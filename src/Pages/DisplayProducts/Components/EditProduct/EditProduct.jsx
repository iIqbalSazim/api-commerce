import { useForm } from "react-hook-form";

import { editProduct } from "../../Api/Methods";

import {
  StyledCloseCrossIcon,
  StyledFormModal,
  StyledFormModalOverlay,
  StyledButtonsSection,
  StyledCloseButton,
  StyledForm,
  StyledSelect,
  StyledInput,
  StyledLabel,
  StyledSubmitButton,
  StyledTextArea,
  StyledTitle,
} from "../AddProduct/AddProductStyles";

const EditProduct = ({
  product,
  categories,
  updateEditedProduct,
  closeEditModal,
}) => {
  const defaultValues = { ...product };

  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues,
  });

  const categoryValue = watch("category");
  const handleCategoryChange = (e) => setValue("category", e.target.value);

  const onSubmit = async (data) => {
    if (localStorage.getItem("products")) {
      let updatedProduct = data;
      updateEditedProduct(updatedProduct);
    } else {
      let id = data.id;
      delete data.id;
      let response = await editProduct(data, id);
      updateEditedProduct(response.data);
    }

    alert("Product updated!");

    closeEditModal(product.id);
    reset({ ...defaultValues });
  };

  return (
    <>
      <StyledFormModalOverlay>
        <StyledFormModal>
          <StyledCloseCrossIcon onClick={() => closeEditModal(product.id)} />
          <StyledTitle>Edit Product</StyledTitle>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledLabel>Title</StyledLabel>
            <StyledInput type="text" {...register("title")} required />
            <StyledLabel>Category</StyledLabel>
            <StyledSelect value={categoryValue} onChange={handleCategoryChange}>
              <option value="">Select a category</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>
            <StyledLabel>Description</StyledLabel>
            <StyledTextArea {...register("description")} required />
            <StyledLabel>Price</StyledLabel>
            <StyledInput type="number" {...register("price")} required />
            <StyledLabel>Rating</StyledLabel>
            <StyledInput type="text" {...register("rating")} required />
            <StyledLabel>Share a link to an Image</StyledLabel>
            <StyledInput type="text" {...register("thumbnail")} />
            <StyledButtonsSection>
              <StyledCloseButton onClick={() => closeEditModal(product.id)}>
                Close Modal
              </StyledCloseButton>
              <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
            </StyledButtonsSection>
          </StyledForm>
        </StyledFormModal>
      </StyledFormModalOverlay>
    </>
  );
};

export default EditProduct;

import { useForm } from "react-hook-form";

import { ProductFormValidationSchema } from "../../Validation/FormValidation";

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
  StyledFormValidationError,
} from "../AddProduct/AddProductStyles";
import { editProduct } from "../../Api/Methods";

const EditProduct = ({
  product,
  categories,
  updateEditedProduct,
  closeEditModal,
}) => {
  const defaultValues = { ...product };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
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
  };

  const {
    validateTitle,
    validateCategory,
    validateDescription,
    validateRating,
    validatePrice,
    validateImageLink,
  } = ProductFormValidationSchema;

  return (
    <>
      <StyledFormModalOverlay>
        <StyledFormModal>
          <StyledCloseCrossIcon onClick={() => closeEditModal(product.id)} />
          <StyledTitle>Edit Product</StyledTitle>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <StyledLabel>Title</StyledLabel>
            <StyledInput
              type="text"
              {...register("title", { ...validateTitle })}
            />
            {errors.title && (
              <StyledFormValidationError>
                {errors.title.message}
              </StyledFormValidationError>
            )}

            <StyledLabel>Category</StyledLabel>
            <StyledSelect
              {...register("category", { ...validateCategory })}
              value={categoryValue}
              onChange={handleCategoryChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category.toUpperCase()}
                  </option>
                );
              })}
            </StyledSelect>
            {errors.category && (
              <StyledFormValidationError>
                {errors.category.message}
              </StyledFormValidationError>
            )}

            <StyledLabel>Description</StyledLabel>
            <StyledTextArea
              {...register("description", { ...validateDescription })}
            />
            {errors.description && (
              <StyledFormValidationError>
                {errors.description.message}
              </StyledFormValidationError>
            )}

            <StyledLabel>Price</StyledLabel>
            <StyledInput
              type="text"
              {...register("price", { ...validatePrice })}
            />
            {errors.price && (
              <StyledFormValidationError>
                {errors.price.message}
              </StyledFormValidationError>
            )}

            <StyledLabel>Rating (0 to 5)</StyledLabel>
            <StyledInput
              type="text"
              {...register("rating", { ...validateRating })}
            />
            {errors.rating && (
              <StyledFormValidationError>
                {errors.rating.message}
              </StyledFormValidationError>
            )}

            <StyledLabel>Share a link to an Image</StyledLabel>
            <StyledInput
              type="text"
              {...register("thumbnail", { ...validateImageLink })}
            />
            {errors.thumbnail && (
              <StyledFormValidationError>
                {errors.thumbnail.message}
              </StyledFormValidationError>
            )}

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

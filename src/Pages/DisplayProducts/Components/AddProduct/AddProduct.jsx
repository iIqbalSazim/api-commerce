import { useState } from "react";
import { useForm } from "react-hook-form";

import { addProduct } from "../../Api/Methods";

import {
  StyledAddNewProductButton,
  StyledAddProductWrapper,
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
} from "./AddProductStyles";

const AddProduct = ({ setNewProduct, categories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const defaultValues = {
    id: "",
    title: "",
    description: "",
    price: null,
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  };

  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues,
  });

  const categoryValue = watch("category");
  const handleCategoryChange = (e) => setValue("category", e.target.value);

  const onSubmit = async (data) => {
    const res = await addProduct(data);

    const updatedId = {
      ...res.data,
      id: res.data.id + Math.floor(Math.random() * 10000),
    };

    setNewProduct(updatedId);
    alert("New Product added!");
    setIsAddModalOpen(false);

    reset({ ...defaultValues });
  };

  return (
    <>
      <StyledAddProductWrapper>
        <StyledAddNewProductButton
          onClick={() => setIsAddModalOpen(!isAddModalOpen)}
        >
          Add New Product
        </StyledAddNewProductButton>
        {isAddModalOpen ? (
          <StyledFormModalOverlay>
            <StyledFormModal>
              <StyledCloseCrossIcon onClick={() => setIsAddModalOpen(false)} />
              <StyledTitle>Add New Product</StyledTitle>
              <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <StyledLabel>Title</StyledLabel>
                <StyledInput type="text" {...register("title")} required />
                <StyledLabel>Category</StyledLabel>
                <StyledSelect
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
                <StyledLabel>Description</StyledLabel>
                <StyledTextArea {...register("description")} required />
                <StyledLabel>Price</StyledLabel>
                <StyledInput type="number" {...register("price")} required />
                <StyledLabel>Rating</StyledLabel>
                <StyledInput type="text" {...register("rating")} required />
                <StyledLabel>Share a link to an Image</StyledLabel>
                <StyledInput type="text" {...register("thumbnail")} />
                <StyledButtonsSection>
                  <StyledCloseButton onClick={() => setIsAddModalOpen(false)}>
                    Close Modal
                  </StyledCloseButton>
                  <StyledSubmitButton type="submit">Submit</StyledSubmitButton>
                </StyledButtonsSection>
              </StyledForm>
            </StyledFormModal>
          </StyledFormModalOverlay>
        ) : null}
      </StyledAddProductWrapper>
    </>
  );
};

export default AddProduct;

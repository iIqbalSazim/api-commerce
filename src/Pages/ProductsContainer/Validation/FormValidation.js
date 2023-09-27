export const ProductFormValidationSchema = {
  validateTitle: {
    required: { value: true, message: "Title is a required field." },
    maxLength: {
      value: 100,
      message: "Title should be less than 100 characters",
    },
  },
  validateCategory: {
    required: { value: true, message: "Please select one category." },
  },
  validateDescription: {
    required: { value: true, message: "Description is a required field." },
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters.",
    },
    maxLength: {
      value: 250,
      message: "Description must not exceed 250 characters.",
    },
  },
  validatePrice: {
    required: { value: true, message: "Price is a required field." },
    pattern: {
      value: /^(?:[1-9]\d{0,7}|9999999)$/,
      message: "Price must be a number greater than 0 and less than 7 digits.",
    },
  },
  validateRating: {
    required: { value: true, message: "Rating is a required field." },
    pattern: {
      value: /^(?:[0-5](?:\.\d{1,2})?)$/,
      message: "Please enter a valid number between 0 and 5",
    },
  },
  validateImageLink: {
    required: { value: false },
    pattern: {
      value: /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/\S*)?$/i,
      message: "Please enter a valid URL",
    },
  },
};

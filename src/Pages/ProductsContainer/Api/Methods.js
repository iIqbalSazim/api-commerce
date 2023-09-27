import {
  getRequest,
  postRequest,
  patchRequest,
  deleteRequest,
} from "../../../Config/Axios/AxiosConfig";

export const fetchAllProducts = async () => {
  return await getRequest("products");
};

export const fetchAllCateogories = async () => {
  return await getRequest("products/categories");
};

export const fetchProduct = async (id) => {
  return await getRequest(`product/${id}`);
};

export const addProduct = async (data) => {
  return await postRequest("products/add", data);
};

export const editProduct = async (data, id) => {
  return await patchRequest(`products/${id}`, data);
};

export const deleteProductApi = async (id) => {
  return await deleteRequest(`products/${id}`);
};

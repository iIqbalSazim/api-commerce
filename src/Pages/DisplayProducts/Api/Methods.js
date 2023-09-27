import { getRequest } from "../../../Config/Axios/AxiosConfig";

export const fetchAllProducts = async () => {
  return await getRequest("products");
};

export const fetchProduct = async (id) => {
  return await getRequest(`product/${id}`);
};

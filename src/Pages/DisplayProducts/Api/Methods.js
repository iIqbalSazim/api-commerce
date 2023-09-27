import { getRequest } from "../../../Config/Axios/AxiosConfig";

export const fetchAllProducts = async () => {
  return await getRequest("products");
};

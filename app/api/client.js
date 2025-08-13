import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  baseURL: "http://192.168.1.104:9000/api",
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const respone = await get(url, params, axiosConfig);

  if (respone.ok) {
    cache.store(url, respone.data);
    return respone;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : respone;
};
export default apiClient;

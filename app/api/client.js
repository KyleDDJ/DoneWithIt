//mosh
// import { create } from "apisauce";
// import cache from "../utility/cache";
// import authStorage from "../auth/storage";
// import settings from "../config/settings";

// const apiClient = create({
//   baseURL: settings.apiUrl,
// });

// apiClient.addAsyncRequestTransform(async (request) => {
//   const authToken = await authStorage.getToken();
//   if (!authToken) return;
//   request.headers["x-auth-token"] = authToken;
// });

// const get = apiClient.get;
// apiClient.get = async (url, params, axiosConfig) => {
//   const respone = await get(url, params, axiosConfig);

//   if (respone.ok) {
//     cache.store(url, respone.data);
//     return respone;
//   }

//   const data = await cache.get(url);
//   return data ? { ok: true, data } : respone;
// };
// export default apiClient;

import { create } from "apisauce";
import cache from "../utility/cache";
import authStorage from "../auth/storage";
import getCurrentSettings from "../config/settings";

const apiClient = create({
  baseURL: "",
});

apiClient.addAsyncRequestTransform(async (request) => {
  request.baseURL = getCurrentSettings().apiUrl;

  const authToken = await authStorage.getToken();
  if (authToken) {
    request.headers["x-auth-token"] = authToken;
  }

  console.log("API request to:", request.baseURL + request.url);
});

const originalGet = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await originalGet(url, params, axiosConfig);

  if (response.ok) {
    await cache.store(url, response.data);
    return response;
  }

  const cachedData = await cache.get(url);
  return cachedData ? { ok: true, data: cachedData } : response;
};

export default apiClient;

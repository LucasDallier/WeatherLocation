import axios from "axios";

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});
console.log("VITE_API_BASE_URL", import.meta.env.VITE_API_BASE_URL);
console.log("VITE_APPID", import.meta.env.VITE_APPID);

export default api;

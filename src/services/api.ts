import axios from "axios";

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;

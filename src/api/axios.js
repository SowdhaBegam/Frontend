import axios from "axios";
import { getToken } from "../utils/authStorage";

// axios instance
const instance = axios.create({
  baseURL: "https://mc-platform-f2ea1hanm-sangeetha-lakshmis-projects.vercel.app/api",
});

// attach token
instance.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ======================
   ORDER API FUNCTIONS
====================== */

export const acceptOrder = (id) =>
  instance.put(`shop/orders/${id}/accept`);

export const markReady = (id) =>
  instance.put(`shop/orders/${id}/ready`);

export const completeOrder = (id) =>
  instance.put(`shop/orders/${id}/completed`);

// default export
export default instance;

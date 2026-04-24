import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5238/api"
});

// GET
export const getDevices = () => API.get("/device");

// POST
export const createDevice = (data) => API.post("/device", data);

// PUT
export const updateDevice = (id, data) => API.put(`/device/${id}`, data);

// DELETE
export const deleteDevice = (id) => API.delete(`/device/${id}`);
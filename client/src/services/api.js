import axios from "axios";

const BASE_URLS = {
  express: "http://localhost:8080/api", 
  jsonServer: "http://localhost:5000", 
};

const api = axios.create({
  baseURL: BASE_URLS.express, 
});

export const setBaseURL = (serverType) => {
  api.defaults.baseURL = BASE_URLS[serverType];
};

export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};

export const register = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const login = async (userData) => {
  try {
    const response = await api.post("/auth/login", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchHotels = async () => {
  try {
    setBaseURL("jsonServer");
    const response = await api.get("/hotels");
    return response.data;
  } catch (error) {
    throw error.response.data;
  } finally {
    setBaseURL("express"); 
  }
};

export const fetchHotelById = async (id) => {
  try {
    setBaseURL("jsonServer");
    const response = await api.get(`/hotels/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  } finally {
    setBaseURL("express"); 
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await api.post("/bookings", bookingData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const fetchUserBookings = async (userId) => {
  try {
    const response = await api.get(`/bookings/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;

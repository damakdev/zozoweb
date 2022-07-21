import axios from "axios";

export function register(body) {
  return axios.post(`/register`, body);
}

export function login(body) {
  return axios.post(`/login`, body);
}

export function getCurrentUser() {
  return axios.get(`/whoami`);
}

export function checkEmail(email) {
  return axios.get(`/check:${email}`);
}

export function forgotPassword(body) {
  return axios.post(`/password/forgot`, body);
}

export function resetPassword(body) {
  return axios.post(`/password/reset`, body);
}

export function getAllCategories() {
  return axios.get(`/customer/category`);
}

export function getAllProducts() {
  return axios.get(`/customer/product`);
}

export function getProduct(id) {
  return axios.get(`/customer/product/:${id}`);
}

export function getProductsByCategoryId() {
  return axios.post(`/customer/product/category/:${id}`);
}

export function getProductsByCategoryName() {
  return axios.post(`/customer/product/category/name`);
}

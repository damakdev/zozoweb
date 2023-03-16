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
  return axios.get(`/check/${email}`);
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

export function getAllCategoryProduct(body) {
  return axios.post(`/customer/product/category/name`, body);
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

export function getApprovedBidEvents() {
  return axios.get(`customer/bidding`);
}

export function searchApprovedBidEvents(query) {
  return axios.get(`/customer/bidding/search?search=${query}`);
}

export function getSingleBidEvent(customer_id, event_id) {
  return axios.get(`/customer/bidding/details/${customer_id}/${event_id}`);
}

export function getWonBidEvents(customer_id) {
  return axios.get(`/customer/bidding/wins/${customer_id}`);
}

export function getBidEventsByCategoryNames(body) {
  return axios.post(`/customer/bidding/category`, body);
}

export function getBidEventAccess(body) {
  return axios.post(`/customer/bidding/request`, body);
}

export function resendBidEventAccess(body) {
  return axios.post(`/customer/bidding/resend`, body);
}

export function accessBidEvent(body) {
  return axios.post(`/customer/bidding/access`, body);
}

export function bidOnEvent(body) {
  return axios.post(`/customer/bidding/bid`, body);
}

export function updateStake(body) {
  return axios.patch(`/customer/bidding/update`, body);
}

export function getBidEventByStatus(body) {
  return axios.post(`/customer/bidding/status`, body);
}
export function wonBidPayment(body) {
  return axios.post(`/customer/bidding/checkout`, body);
}

export function getSingleCustomerEvent(customer_id, event_id) {
  return axios.get(`/customer/event/one/${customer_id}/${event_id}`);
}

export function getAllCustomerEvents(customer_id) {
  return axios.get(`/customer/event/all/${customer_id}`);
}

export function removeCustomerEvent(event_id) {
  return axios.del(`/customer/event/delete/${event_id}`);
}

export function upgradeToMerchant(body) {
  return axios.post(`/customer/upgrade`, body);
}

export function verifyAccount(body) {
  return axios.post(`/customer/verify/request`, body);
}

export function resolveAccountVerification() {
  return axios.post(`/customer/verify/resolve`);
}

export function getAllContent() {
  return axios.get(`/customer/cms`);
}

export function getContentById(id) {
  return axios.get(`/customer/cms/${id}`);
}
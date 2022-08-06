import axios from "axios";

export function getCustomers(){
      return axios.get('/admin/customer')
}

export function getSingleCustomer(id){
      return axios.get(`/admin/customer/${id}`)
}
export function verifyUserAcct(body){
      return axios.post('/admin/account/verify', body)
}

export function getMerchants(){
      return axios.get('/admin/merchant')
}

export function getSingleMerchant(id){
      return axios.get(`/admin/merchant/${id}`)
}

export function getAllEventsList(){
      return axios.get("/admin/bidding")
}

export function adminSingleEvent(id){
      return axios.get(`/admin/bidding/${id}`)
}

export function startBidEvent(id){
      return axios.get(`/admin/bidding/start/${id}`)
}

export function stopBidEvent(id){
      return axios.get(`/admin/bidding/end/${id}`)
}

export function cancelBidEvent(id){
      return axios.get(`/admin/bidding/cancel/${id}`)
}
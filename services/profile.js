import axios from "axios";

export function uploadAvatar(account_id, body) {
    return axios.post(`/profile/${account_id}`, body);
}

export function updateAvatar(account_id, body) {
    return axios.patch(`/profile/${account_id}`, body);
}

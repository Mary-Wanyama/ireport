import axios from "axios";

const BASE_URL = "https://chiriku-dat-production.up.railway.app/"
export default axios.create({
    baseURL: BASE_URL
})

export const axiosPrivate = axios.create({
    baseURL: BASE_URL, 
    headers: {"ContentType": "application/json"}, 
    withCredentials: true
})
import axios from "axios";

export const api = axios.create({
    baseURL: "http://10.10.205.26:3001"
});
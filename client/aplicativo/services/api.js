import axios from "axios";

export const api = axios.create({
    baseURL: "http://b024-177-200-213-98.ngrok.io"
});
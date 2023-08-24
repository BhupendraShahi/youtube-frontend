import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://youtube-clone-wsij.onrender.com/api"
});
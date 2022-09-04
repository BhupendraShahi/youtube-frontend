import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://not-youtube-server.herokuapp.com/api/"
});
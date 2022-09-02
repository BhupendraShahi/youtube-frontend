import axios from "axios";

export const axiosInstance = axios.create({
    baseUrl: "https://not-youtube-server.herokuapp.com/api/"
});
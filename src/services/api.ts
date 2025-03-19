import axios from "axios";

const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";
const TOKEN_CYBERSOFT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3OCIsIkhldEhhblN0cmluZyI6IjI3LzA3LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc1MzU3NDQwMDAwMCIsIm5iZiI6MTcyNjA3NDAwMCwiZXhwIjoxNzUzNzIyMDAwfQ.BTmM2iB4rp2M5zBswdnAhImSAoSPeaxquN5mTgxFzaQ";

const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        TokenCyberSoft: TOKEN_CYBERSOFT,
    },
});
axiosClient.interceptors.request.use((config) => {
    try {
        const userInfo = localStorage.getItem("userInfo");
        const accessToken = userInfo ? JSON.parse(userInfo)?.accessToken : null;

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
    } catch (error) {
        console.error("Lỗi khi lấy accessToken từ localStorage", error);
    }

    return config;
});

export default axiosClient;

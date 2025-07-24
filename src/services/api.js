
import axios from "axios";

const api = axios.create({
    baseURL: 'https://remoteok.com/api',
})

export const getJobs = async () => {
    const response = await api.get("/");
    return response.data;
};

export default api
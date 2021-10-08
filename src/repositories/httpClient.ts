import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT

const httpClient = axios.create({})

export default httpClient;

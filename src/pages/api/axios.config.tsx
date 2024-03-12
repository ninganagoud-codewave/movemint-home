// axios import
import axios, { AxiosInstance } from "axios";

const baseUrl = "https://r0iufa1v5a.execute-api.us-east-1.amazonaws.com/";


const instance: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 0,
});

export const instanceWithoutToken: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 0
});

export default instance;

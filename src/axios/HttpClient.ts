import axios, {AxiosInstance} from "axios";
import {BACKEND_URL} from "./url.constants.ts";

/**
 * HttpClient
 */
export const HttpClient: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    validateStatus: () => true,
})
import * as axios from "axios";
import {BACKEND_URL} from "./url.constants.ts";

/**
 * HttpClient
 */
export const HttpClient = axios.create({
    baseURL: BACKEND_URL,
    validateStatus: () => true,
})
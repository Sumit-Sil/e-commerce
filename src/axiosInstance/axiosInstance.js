import axios from "axios";
import baseUrl from "../apiURL/apiUrl";

let axiosInstance = axios.create({
  baseURL: baseUrl,
});
export default axiosInstance;

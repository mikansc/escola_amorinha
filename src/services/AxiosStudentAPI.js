import axios from "axios";
import * as constants from "./constants";

const BASE_URL = `${constants.API_URL}`;

class StudentAPI {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
    });
    this.axiosInstance.interceptors.response.use(
      (res) => res,
      (error) => {
        throw error;
      }
    );
  }

  findAll() {
    return this.axiosInstance
      .get("/students")
      .then((response) => response.data);
  }

  // findAll() {
  //   return axios.get("/students").then((response) => response.data);
  // }
}

export default new StudentAPI(BASE_URL);

import axios from "axios";
import * as constants from "./constants";

const BASE_URL = `${constants.API_URL}`;

class StudentAPI {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
    });
  }

  findAll() {
    return this.axiosInstance
      .get("/students")
      .then((response) => response.data);
  }
}

export default new StudentAPI(BASE_URL);

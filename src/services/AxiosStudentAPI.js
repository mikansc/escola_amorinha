import axios from "axios";
import * as constants from "./constants";

const BASE_URL = `${constants.API_URL}`;

class StudentAPI {
  constructor(url) {
    this.axiosInstance = axios.create({
      baseURL: url,
    });
  }

  findAll(term) {
    const config = term
      ? {
          params: {
            name: term,
          },
        }
      : null;

    return this.axiosInstance
      .get("/students", config)
      .then((response) => response.data);
  }

  find(id) {
    return axios.get(`/students/${id}`).then((response) => response.data);
  }

  create(studentObj) {
    return this.axiosInstance.post("/students", studentObj);
  }

  update(studentObj) {
    return this.axiosInstance.put(`/students/${studentObj.id}`, studentObj);
  }

  delete(id) {
    return this.axiosInstance.delete(`/students/${id}`);
  }
}

export default new StudentAPI(BASE_URL);

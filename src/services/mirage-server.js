// /* eslint-disable no-unused-vars */
import { createServer, Model } from "miragejs";
import students from "../utils/mockedData";
import * as constants from "./constants";

export function criarServidor({ environment = "test" } = {}) {
  const server = createServer({
    environment,

    models: {
      student: Model,
    },

    seeds(server) {
      students.forEach((item) => server.create("student", item));
    },

    routes() {
      this.urlPrefix = constants.API_URL;

      this.get("/students", (schema) => schema.students.all());

      this.passthrough();
    },
  });

  return server;
}

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

      this.get("/students", (schema, request) => {
        const { name } = request.queryParams;

        if (name) {
          return schema.students.where((student) => student.name.includes(name))
            .models;
        }

        return schema.students.all().models;
      });
    },
  });

  return server;
}

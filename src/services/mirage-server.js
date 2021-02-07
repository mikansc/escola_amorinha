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
          return schema.students.where((student) =>
            student.name.toLowerCase().includes(name.toLowerCase())
          ).models;
        }

        return schema.students.all().models;
      });

      this.post("/students", (schema, request) => {
        const data = JSON.parse(request.requestBody);
        return schema.students.create(data);
      });

      // this.put("/students/:id", (schema, request) => {
      //   const { id } = request.params;
      //   const data = JSON.parse(request.requestBody);
      //   return schema.students.find(id).update(data);
      // });

      // this.delete("/students/:id", (schema, request) => {
      //   const { id } = request.params;
      //   return schema.students.find(id).destroy();
      // });
    },
  });

  return server;
}

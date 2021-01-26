// /* eslint-disable no-unused-vars */
import { createServer, Model } from "miragejs";
import students from "../utils/mockedData";
import * as constants from "./constants";

export function criarServidor({ environment = "test" } = {}) {
  const sv = createServer({
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

      // this.post("/students", (schema, request) => {
      //   const attrs = JSON.parse(request.requestBody);
      //   return schema.students.create(attrs);
      // });

      // this.put("/students", (schema, request) => {
      //   const attrs = JSON.parse(request.requestBody);
      //   return schema.students.create(attrs);
      // });

      // this.delete("/students/:id", (schema, request) => {
      //   const id = request.params.id;

      //   return schema.students.find(id).destroy();
      // });
      this.passthrough();
    },
  });

  return sv;
}

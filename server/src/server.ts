import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppRoutes } from "./infra/http/routes";

const app = Fastify();

app.register(cors);
app.register(AppRoutes.routes);

app.listen({
  port: 3333,
}).then(() => {
  console.log("HTTP Server running!");
});

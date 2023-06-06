import Fastify from "fastify";
import cors from "@fastify/cors";
import { AppRoutes } from "./infra/http/routes";

const app = Fastify();

app.register(cors);
app.register(AppRoutes.routes);

app.listen({
  port: 3333,
  host: '0.0.0.0', // Por padrão o fastify é localhost, se não setar '0.0.0.0' o fastify não permite requição por ip
}).then(() => {
  console.log("HTTP Server running!");
});

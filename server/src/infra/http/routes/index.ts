import { FastifyInstance } from "fastify";
import { CreateHabitRoute } from "./create-habit-route";
import { GetHabitsRoute } from "./get-habits-route";
import { ToggleHabitRoute } from "./toggle-habit-route";
import { GetSummaryRoute } from "./get-summary-route";

export class AppRoutes {
  static routes = async (app: FastifyInstance) => {
    const createHabitRoute = new CreateHabitRoute(app);
    const getHabitsRoute = new GetHabitsRoute(app);
    const toggleHabitRoute = new ToggleHabitRoute(app);
    const getSummaryRoute = new GetSummaryRoute(app);

    createHabitRoute.route();
    getHabitsRoute.route();
    toggleHabitRoute.route();
    getSummaryRoute.route();
  }
}

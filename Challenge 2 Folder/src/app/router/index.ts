import { Router } from "express";
import { IngredientRoutes } from "../modules/ingredients/ingredients.routes";

const router = Router();

const moduleRoutes = [
    {
        path: "/ingredient",
        route: IngredientRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

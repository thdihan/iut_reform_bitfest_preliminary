import { Router } from "express";
import { IngredientRoutes } from "../modules/ingredients/ingredients.routes";
import { RecipiesRoutes } from "../modules/recipes/recipes.routes";

const router = Router();

const moduleRoutes = [
    {
        path: "/ingredient",
        route: IngredientRoutes,
    },
    {
        path: "/recipe",
        route: RecipiesRoutes,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;

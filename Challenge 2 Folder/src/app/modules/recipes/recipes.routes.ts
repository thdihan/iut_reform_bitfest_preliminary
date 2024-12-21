import express from "express";
import { RecipiesController } from "./recipes.controller";

const router = express.Router();

router.get("/", RecipiesController.getRecipies);
router.post("/", RecipiesController.addRecipe);
router.post("/suggestions", RecipiesController.getSuggestions);

export const RecipiesRoutes = router;

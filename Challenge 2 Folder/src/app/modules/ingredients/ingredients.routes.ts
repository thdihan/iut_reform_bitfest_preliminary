import express from "express";
import { IngredientController } from "./ingredients.controller";

const router = express.Router();

router.post("/", IngredientController.addIngredient);
router.put("/:id", IngredientController.updateIngredient);
router.get("/", IngredientController.getIngredients);
router.get("/:id", IngredientController.getIngredientById);

export const IngredientRoutes = router;

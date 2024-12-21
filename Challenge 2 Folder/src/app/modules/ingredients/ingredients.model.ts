import { Schema, model } from "mongoose";
import { TIngredient } from "./ingredients.interface";

const IngredientSchema = new Schema<TIngredient>(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
    },
    { timestamps: true }
);

export const IngredientModel = model<TIngredient>(
    "Ingredient",
    IngredientSchema
);

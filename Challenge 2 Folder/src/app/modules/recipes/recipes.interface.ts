import { TIngredient } from "../ingredients/ingredients.interface";

export type TRecipe = {
    id: string;
    name: string;
    type: string;
    description: string;
    imagePath: string;
    ingredients: TIngredient[];
};

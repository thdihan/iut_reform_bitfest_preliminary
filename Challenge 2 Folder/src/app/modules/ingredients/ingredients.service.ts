import { TIngredient } from "./ingredients.interface";
import { IngredientModel } from "./ingredients.model";

const addIngredientFromDB = async (ingredient: TIngredient) => {
    const result = await IngredientModel.create(ingredient);
    return result;
};

const updateIngredientFromDB = async (id: string, ingredient: TIngredient) => {
    const result = await IngredientModel.findByIdAndUpdate(id, ingredient, {
        new: true,
    });
    return result;
};

const getIngredientsFromDB = async () => {
    const result = await IngredientModel.find();
    return result;
};

const getIngredientByIdFromDB = async (id: string) => {
    const result = await IngredientModel.findById(id);
    return result;
};

export const IngredientService = {
    addIngredientFromDB,
    updateIngredientFromDB,
    getIngredientsFromDB,
    getIngredientByIdFromDB,
};

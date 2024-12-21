import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RecipesService } from "./recipes.service";

const getRecipies = catchAsync(async (req, res) => {
    const recipes = await RecipesService.readFileAsJson();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Recipies fetched successfully",
        data: recipes,
    });
});

const addRecipe = catchAsync(async (req, res) => {
    const getPreviousRecipes = await RecipesService.readFileAsJson();

    const newRecipe = { id: getPreviousRecipes.length + 1, ...req.body };

    const updatedRecipes = [...getPreviousRecipes, newRecipe];

    await RecipesService.writeFileFromJson(updatedRecipes);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Recipe added successfully",
        data: newRecipe,
    });
});

const getSuggestions = catchAsync(async (req, res) => {
    const suggestions = await RecipesService.getSuggestionsFromHuggingFace(
        req.body.prompt
    );

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Suggestions fetched successfully",
        data: suggestions,
    });
});

export const RecipiesController = {
    getRecipies,
    addRecipe,
    getSuggestions,
};

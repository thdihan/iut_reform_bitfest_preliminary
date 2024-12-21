import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { IngredientService } from "./ingredients.service";

const addIngredient = catchAsync(async (req, res) => {
    const result = await IngredientService.addIngredientFromDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Ingredient Added successfully",
        data: result,
    });
});

const updateIngredient = catchAsync(async (req, res) => {
    const result = await IngredientService.updateIngredientFromDB(
        req.params.id,
        req.body
    );

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Ingredient Updated successfully",
        data: result,
    });
});

const getIngredients = catchAsync(async (req, res) => {
    const result = await IngredientService.getIngredientsFromDB();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Ingredients fetched successfully",
        data: result,
    });
});

const getIngredientById = catchAsync(async (req, res) => {
    const result = await IngredientService.getIngredientByIdFromDB(
        req.params.id
    );

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Ingredient fetched successfully",
        data: result,
    });
});

export const IngredientController = {
    addIngredient,
    updateIngredient,
    getIngredients,
    getIngredientById,
};

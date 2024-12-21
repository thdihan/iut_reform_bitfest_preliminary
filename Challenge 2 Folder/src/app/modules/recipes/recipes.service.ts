import { parseToJson } from "../../utils/parseJson";
import { TRecipe } from "./recipes.interface";
const fs = require("fs").promises;
const path = require("path");

const filePath = path.join(process.cwd(), "public", "my_fav_recipes.txt");

const readFileAsJson = async () => {
    try {
        const data = await fs.readFile(filePath, "utf8");
        const lines = data
            .split("\n")
            .filter((line: string) => line.trim() !== "");

        // console.log("File content:", lines);

        const json = parseToJson(lines) as TRecipe[];
        // console.log("File content converted to JSON:", json);

        return json;
    } catch (error) {
        console.error("Error reading file:", error);
        throw error;
    }
};

const writeFileFromJson = async (recipes: TRecipe[]) => {
    try {
        const data = JSON.stringify(recipes, null, 2);
        await fs.writeFile(filePath, data, "utf8");
        console.log("File written successfully");
    } catch (error) {
        console.error("Error writing file:", error);
        throw error;
    }
};

export const RecipesService = {
    readFileAsJson,
    writeFileFromJson,
};

import config from "../../config";
import { getModel } from "../../utils/huggingface";
import { parseToJson } from "../../utils/parseJson";
import { TRecipe } from "./recipes.interface";

// import { HuggingFaceInference } from "langchain/llms/hf";
// import { textGeneration } from "@huggingface/inference";

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

const getSuggestionsFromHuggingFace = async (input: string) => {
    // Initialize Hugging Face Inference
    let text = JSON.stringify(await readFileAsJson()) as string;
    const prompt = `Here are a list of recipe as json format text : ${text}\n 
    Now considering type mentioned in recipe, please suggest me a recipe from the list based on this prompt : ${input}. \n
    Provide in this format
    name: , \n
    ingredient: `;

    console.log("Text:", text);
    const model = getModel();
    try {
        console.log("Requesting suggestions from Hugging Face");
        const response = await model.textGeneration({
            model: "gpt2",
            inputs: prompt,
        });

        console.log(response.generated_text);
        return response;
    } catch (error) {
        console.error(`Error processing text: ${error}`);
        throw error;
    }
};

export const RecipesService = {
    readFileAsJson,
    writeFileFromJson,
    getSuggestionsFromHuggingFace,
};

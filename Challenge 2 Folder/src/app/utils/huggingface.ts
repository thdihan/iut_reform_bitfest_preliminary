import config from "../config";
import { HfInference } from "@huggingface/inference";

const apiKey = config.huggingface_api_key;

export const getModel = () => {
    if (!apiKey) {
        console.error("Error: HUGGINGFACE_API_KEY not set in .env file");
        throw new Error("HUGGINGFACE_API_KEY not set in .env file");
    }

    const hf = new HfInference(apiKey);
    return hf;
};

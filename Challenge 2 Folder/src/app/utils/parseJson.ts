export const parseToJson = (input: string[]) => {
    // Step 1: Join the array into a single string
    let jsonString = input
        .join("\n")
        .replace(/;/g, ",") // Replace semicolons with commas
        .replace(/(\w+):/g, '"$1":') // Add quotes around keys
        .replace(/,(\s*[\]}])/g, "$1"); // Remove trailing commas before } or ]

    // Step 2: Parse the cleaned-up string into a JSON object
    try {
        const jsonObject = JSON.parse(jsonString);
        return jsonObject;
    } catch (error) {
        console.error("Error parsing JSON:", error);
        return null;
    }
};

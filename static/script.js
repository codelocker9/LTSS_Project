import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

env.allowLocalModels = false;

const input = document.getElementById("text-input");
const send_btn = document.getElementById("send-input");
const status = document.getElementById("status");
// const newElement = document.createElement("p"); // Or any other element

// Loading the model
status.textContent = "Loading model...";
const model_one = await pipeline("text-generation");
status.textContent = "Ready";

send_btn.addEventListener('click', async (event) => {
    const userInput = input.value;
    const escapedUserInput = encodeURIComponent(userInput); // Escape user input here
    status.textContent = "Generating text...";
    const outputText = await model_one(escapedUserInput);
    const textNode = outputText[0].generated_text;
    status.textContent = textNode;
});

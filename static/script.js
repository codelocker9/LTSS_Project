import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

env.allowLocalModels = false;

const input = document.getElementById("text-input");
const send_btn = document.getElementById("send-input");
const status = document.getElementById("status");

// Loading the model
status.textContent = "Loading model...";
const model_one = await pipeline("text-generation");
status.textContent = "Ready";

send_btn.addEventListener('click', async (event) => {
    // status.textContent = await model_one(input);
    const userInput = input.value;

    const escapedUserInput = encodeURIComponent(userInput); // Escape user input here
    status.textContent = "Generating text...";
    const outputText = await model_one(escapedUserInput);
    const textNode = document.createTextNode(outputText);
    const newElement = document.createElement("p"); // Or any other element
    newElement.appendChild(textNode);
    console.log(outputText);
    status.innerHTML = ""; // Clear any previous content
    status.appendChild(newElement);
});

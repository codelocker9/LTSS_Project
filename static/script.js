import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

env.allowLocalModels = false;
env.HUGGINGFACEHUB_API_TOKEN = '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';

const input = document.getElementById("text-input");
const send_btn = document.getElementById("send-input");
const status = document.getElementById("status");

// // Creating an object detection pipeline

// Allocate a pipeline for sentiment-analysis
send_btn.addEventListener('click', async (event) => {
    status.textContent = "Loading model...";
    const model_one = await pipeline("text-generation", "google/gemma-7b-it");
    status.textContent = "Ready";
});

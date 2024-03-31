const { pipeline } = require("transformers");
// Assuming you've included the Transformers library

const question = "What is the capital of France?";
const answer = await pipeline("question-answering")(question, "facebook/bart-base-squad2");
console.log("Answer:", answer.answer);

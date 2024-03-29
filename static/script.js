import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@xenova/transformers@2.6.0";

env.allowLocalModels = false;

const fileUpload = document.getElementById("file-upload");
const imageContainer = document.getElementById("image-container");
const status = document.getElementById("status");

// Creating an object detection pipeline
status.textContent = "Loading model...";
const detector = await pipeline("object-detection", "Xenova/detr-resnet-50");
status.textContent = "Ready";

// Image Container
fileUpload.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (!file) {
      return;
    }
  
    const reader = new FileReader();
  
    // Set up a callback when the file is loaded
    reader.onload = function (e2) {
      imageContainer.innerHTML = "";
      const image = document.createElement("img");
      image.src = e2.target.result;
      imageContainer.appendChild(image);
      // detect(image); // Uncomment this line to run the model
    };
    reader.readAsDataURL(file);
});

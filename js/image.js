'use strict';
import { canvas, redrawCanvas } from "./draw.js";

export const imageInput = document.getElementById("imageInput");
export let image = new Image();

export function clickImageInput() {
    const file = imageInput.files[0];
    const imageUrl = URL.createObjectURL(file);
    image.src = imageUrl;
    image.onload = function () {
        canvas.width = image.width;
        canvas.height = image.height;
        redrawCanvas();
    };
}
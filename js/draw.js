'use strict';


import { image } from "./image.js";


export const canvas = document.getElementById("canvas");
export let textElements = [];
export const ctx = canvas.getContext("2d");


export function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, image.width, image.height);
    textElements.forEach(drawText);
}

export function drawText(textElement) {
    ctx.font = `${textElement.fontStyle} ${textElement.fontSize}px ${textElement.font}`;
    ctx.fillStyle = textElement.fillStyle;
    ctx.fillText(textElement.text, textElement.x, textElement.y);
}
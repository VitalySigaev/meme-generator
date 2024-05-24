'use strict';

import { canvas, ctx, redrawCanvas, textElements } from "./draw.js";


let selectedText = null;
let offsetX, offsetY;
let isDragging = false;

export function setMousedown(e) {
    const mouseX = e.clientX - canvas.getBoundingClientRect().left;
    const mouseY = e.clientY - canvas.getBoundingClientRect().top;

    for (const textElement of textElements) {
        if (
            mouseX >= textElement.x &&
            mouseX <= textElement.x + ctx.measureText(textElement.text).width &&
            mouseY >= textElement.y - textElement.fontSize &&
            mouseY <= textElement.y
        ) {
            isDragging = true;
            selectedText = textElement;
            offsetX = mouseX - selectedText.x;
            offsetY = mouseY - selectedText.y;
            break;
        }
    }
}

export function setMousemove(e) {
    if (isDragging) {
        const mouseX = e.clientX - canvas.getBoundingClientRect().left;
        const mouseY = e.clientY - canvas.getBoundingClientRect().top;
        selectedText.x = mouseX - offsetX;
        selectedText.y = mouseY - offsetY;
        redrawCanvas();
    }
}

export function setMouseup() {
    isDragging = false;
}
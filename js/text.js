'use strict';

import { canvas, ctx, redrawCanvas, textElements } from "./draw.js";


const textEntry = document.getElementById("textEntry");
export function addText() {
    const text = textEntry.value;
    const x = Math.floor(Math.random() * canvas.width);
    const y = Math.floor(Math.random() * canvas.height);
    const fontSize = parseInt(document.getElementById("textSize").value);
    const font = document.getElementById("fontFamily").value;
    const fillStyle = document.getElementById("textColor").value;
    const fontStyle = document.getElementById("textStyle").value;

    ctx.font = `${fontStyle} ${fontSize}px ${font}`;
    ctx.fillStyle = fillStyle;
    ctx.fillText(text, x, y);

    textElements.push({ text, x, y, fontSize, font, fillStyle, fontStyle });
    textEntry.value = "";
    redrawCanvas();
}
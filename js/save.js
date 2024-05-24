'use strict';

import { textElements } from "./draw.js";
import { image } from "./image.js";


export function saveMemeOnPC() {

    const compositeCanvas = document.createElement("canvas");
    compositeCanvas.width = image.width;
    compositeCanvas.height = image.height;
    const compositeCtx = compositeCanvas.getContext("2d");

    compositeCtx.drawImage(image, 0, 0, image.width, image.height);
    textElements.forEach(function (textElement) {
        compositeCtx.font = `${textElement.fontStyle} ${textElement.fontSize}px ${textElement.font}`;
        compositeCtx.fillStyle = textElement.fillStyle;
        compositeCtx.fillText(textElement.text, textElement.x, textElement.y);
    });

    const dataURL = compositeCanvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "meme.png";
    a.click();
}
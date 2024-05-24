import { setMousedown, setMousemove, setMouseup } from "./canvas.js";
import { clickImageInput, imageInput } from "./image.js";
import { saveMemeOnPC } from "./save.js";
import { addText } from "./text.js";


document.addEventListener("DOMContentLoaded", function () {
    
    const buttonAddText = document.getElementById("addText");
    const buttonSaveMeme = document.getElementById("saveMeme");


    imageInput.addEventListener("change", clickImageInput);

    buttonAddText.addEventListener("click", addText);

    canvas.addEventListener("mousedown", setMousedown);

    canvas.addEventListener("mousemove", setMousemove);

    canvas.addEventListener("mouseup", setMouseup);

    buttonSaveMeme.addEventListener("click", saveMemeOnPC);

});

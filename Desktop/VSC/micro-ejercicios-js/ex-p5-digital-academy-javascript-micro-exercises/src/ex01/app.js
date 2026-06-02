//Escribe un programa que escriba en la pantalla un texto
//  de tipo <h1> que diga “Hello Javascript”
export function renderTitle(title) {
    document.body.insertAdjacentHTML(
        "beforeend",
        `<h1>${title}</h1>`
    );
}
import { renderTitle } from "./rendering.js";

renderTitle("Hello Javascript");


import { ORT } from "./router.js";

export function ORT_NAV() {
    const nav = document.getElementById("ort-nav");

    nav.innerHTML = `
        <button data-go="ORT">ORT</button>
        <button data-go="TMP">TMP</button>
        <button data-go="ACHSE">ACHSE</button>
        <button data-go="LAGE">LAGE</button>
        <button data-go="laTER">laTER</button>
        <button data-go="RAUM">RAUM</button>
        <button data-go="QUANT">QUANT</button>
        <button data-go="SYN">SYN</button>
    `;

    nav.addEventListener("click", e => {
        const to = e.target.dataset.go;
        if (to) ORT.go(to);
    });
}

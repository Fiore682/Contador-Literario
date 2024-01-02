const input = document.querySelector("textarea");
const wordCount = document.querySelector("[data-word-count]");
const characterCount = document.querySelector("[data-character-count]");
const sentenceCount = document.querySelector("[data-sentence-count]");
const paragraphCount = document.querySelector("[data-paragraph-count]");
const downloadButton = document.getElementById("downloadButton");

// ******* Contador ***********

input.addEventListener("input", function() {
    if (input.value.trim() !== "") {
        // Contador de palabras
        const wordsArray = input.value.split(/\s+/).filter(word => word.trim() !== "");
        wordCount.innerText = wordsArray.length;

        // Contador de letras
        characterCount.innerText = input.value.length;

        // Contador de oraciones
        const sentenceArray = input.value.split(/[.!?]/).filter(sentence => sentence.trim() !== "");
        sentenceCount.innerText = sentenceArray.length;

        // Contador de párrafos
        const paragraphArray = input.value.split("\n").filter(paragraph => paragraph.trim() !== "");
        paragraphCount.innerText = paragraphArray.length;
    } else {
        // Si el input esta vacío, resetea el contador
        wordCount.innerText = characterCount.innerText = sentenceCount.innerText = paragraphCount.innerText = 0;
    }
});

// ******* PDF descarga ***********

window.jsPDF = window.jspdf.jsPDF; // Se asegura de que la variable jsPDF sea correctamente setteada en el object window antes de que el script sea ejecutado

downloadButton.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        // Crea un doc PDF
        const pdf = new jsPDF();

        // Incluye el texto del textarea en el PDF
        pdf.text(input.value, 10, 10);

        // Guarda el PDF
        pdf.save("document.pdf");
    } else {
        alert("El área de texto está vacía. Escribe algo antes de intentar descargar el PDF.");
    }
});

// ******* Modo Noche ***********

// Obtiene el botón de cambio de modo noche
const nightModeButton = document.getElementById("toggleNightMode");

// Agrega un escuchador de eventos al botón
nightModeButton.addEventListener("click", function() {
    // Obtiene el body
    const body = document.getElementById("body");

    // Alterna la clase "night-mode" en el body
    body.classList.toggle("night-mode");
});
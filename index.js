document.addEventListener("DOMContentLoaded", () => {
    let model = document.querySelector("model-viewer");
    let shadow = model.shadowRoot;
    let styles = document.createElement("style");
    styles.innerHTML = ".userInput { outline: 0; }";
    shadow.appendChild(styles);
});
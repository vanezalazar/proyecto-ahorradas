/*Funciones auxiliares*/

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

/*Eventos*/

const initializeApp = () => {
    //New operation button event
    $("#new-operation-btn").addEventListener("click", () => {
        $("#new-operation-section").classList.remove("hidden");
        $("#balance-section").classList.add("hidden");
        $("#filters-section").classList.add("hidden");
        $("#operations-section").classList.add("hidden");
    });
    // Navbar events
    $("#balance").addEventListener("click", () => {
        $("#new-operation-section").classList.add("hidden");
        $("#categories-section").classList.add("hidden");
        $("#reports-section").classList.add("hidden");
        $("#balance-section").classList.remove("hidden");
        $("#filters-section").classList.remove("hidden");
        $("#operations-section").classList.remove("hidden");
    });

    $("#categories").addEventListener("click", () => {
        $("#categories-section").classList.remove("hidden");
        $("#reports-section").classList.add("hidden");
        $("#balance-section").classList.add("hidden");
        $("#filters-section").classList.add("hidden");
        $("#operations-section").classList.add("hidden");
    });
    $("#reports").addEventListener("click", () => {
        $("#reports-section").classList.remove("hidden");
        $("#categories-section").classList.add("hidden");
        $("#balance-section").classList.add("hidden");
        $("#filters-section").classList.add("hidden");
        $("#operations-section").classList.add("hidden");
    });
};

window.addEventListener("load", initializeApp);

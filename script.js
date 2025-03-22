const quotes = [
    "Успіх — це здатність крокувати від однієї невдачі до іншої, не втрачаючи ентузіазму.",
    "Найкращий спосіб передбачити майбутнє — створити його.",
    "Єдиний спосіб робити велику роботу — любити те, що ви робите.",
    "Життя — це те, що з тобою відбувається, поки ти будуєш інші плани.",
    "Найкращий час посадити дерево був 20 років тому. Другий найкращий час — сьогодні."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}

window.onload = generateQuote;

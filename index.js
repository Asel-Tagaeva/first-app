const form = document.getElementById('converter-form');
const degreesInput = document.getElementById('degrees');
const typeSelect = document.getElementById('type');
const resultInput = document.getElementById('result');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const degrees = parseFloat(degreesInput.value);
    const type = typeSelect.value;

    let result;

    if (type === 'fahrenheit') {
        result = (degrees - 32) * 5 / 9;
        resultInput.value = `${result.toFixed(1)} °C`;
    } else if (type === 'celsius') {
        result = (degrees * 9 / 5) + 32;
        resultInput.value = `${result.toFixed(1)} °F`;
    }
});

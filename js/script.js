const jsonInput = document.getElementById('json-input');
const formatBtn = document.getElementById('format-btn');
const validateBtn = document.getElementById('validate-btn');
const downloadBtn = document.getElementById('download-btn');
const errorMessage = document.getElementById('error-message');

// Format JSON
formatBtn.addEventListener('click', () => {
    try {
        const json = JSON.parse(jsonInput.value);
        jsonInput.value = JSON.stringify(json, null, 4); // Pretty format
        errorMessage.textContent = '';
    } catch (err) {
        errorMessage.textContent = 'Invalid JSON: ' + err.message;
    }
});

// Validate JSON
validateBtn.addEventListener('click', () => {
    try {
        JSON.parse(jsonInput.value);
        errorMessage.textContent = 'Valid JSON!';
        errorMessage.style.color = 'green';
    } catch (err) {
        errorMessage.textContent = 'Invalid JSON: ' + err.message;
        errorMessage.style.color = 'red';
    }
});

// Download JSON
downloadBtn.addEventListener('click', () => {
    try {
        const json = JSON.parse(jsonInput.value);
        const blob = new Blob([JSON.stringify(json, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'formatted.json';
        a.click();
        URL.revokeObjectURL(url);
        errorMessage.textContent = '';
    } catch (err) {
        errorMessage.textContent = 'Invalid JSON: ' + err.message;
    }
});

document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

});
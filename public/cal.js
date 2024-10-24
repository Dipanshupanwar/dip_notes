// target_cgpa_calculator.js
document.addEventListener('DOMContentLoaded', () => {
    const calculateCgpaBtn = document.getElementById('calculateCGPA');
    const resultDisplay = document.getElementById('result');

    calculateCgpaBtn.addEventListener('click', () => {
        const sgpa = parseFloat(document.getElementById('sgpa').value);
        const targetCgpa = parseFloat(document.getElementById('targetCgpa').value);

        if (isNaN(sgpa) || isNaN(targetCgpa)) {
            resultDisplay.textContent = 'Please enter valid values.';
            return;
        }

        // Calculate the current CGPA
        const currentCgpa =  sgpa  / 1;

        // Display the result
        resultDisplay.textContent = `Your current CGPA is: ${currentCgpa.toFixed(2)}`;
    });
});

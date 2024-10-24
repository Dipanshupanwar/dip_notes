// target_cgpa_calculator.js
document.addEventListener('DOMContentLoaded', () => {
    const calculateCgpaBtn = document.getElementById('calculateCGPA');
    const resultDisplay = document.getElementById('result');

    calculateCgpaBtn.addEventListener('click', () => {
        const sgpa = parseFloat(document.getElementById('sgpa').value);
        const sgpa2 = parseFloat(document.getElementById('sgpa2').value);
        const targetCgpa = parseFloat(document.getElementById('targetCgpa').value);

        if (isNaN(sgpa) || isNaN(sgpa2) || isNaN(targetCgpa)) {
            resultDisplay.textContent = 'Please enter valid numerical values.';
            return;
        }

        // Calculate the current CGPA as a floating-point number
        const currentCgpa = (sgpa + sgpa2) / 2;

        // Display the result as a floating-point number
        resultDisplay.textContent = `Your current CGPA is: ${parseFloat(currentCgpa).toFixed(2)}`;
    });
});

// target_cgpa_calculator.js
document.addEventListener('DOMContentLoaded', () => {
    const calculateCgpaBtn = document.getElementById('calculateCGPA');
    const resultDisplay = document.getElementById('result');

    calculateCgpaBtn.addEventListener('click', () => {
        // Retrieve values from the input fields
        const sgpa1 = parseFloat(document.getElementById('sgpa1').value);
        const sgpa2 = parseFloat(document.getElementById('sgpa2').value);
        const sgpa3 = parseFloat(document.getElementById('sgpa3').value);
        const sgpa4 = parseFloat(document.getElementById('sgpa4').value);
        const sgpa5 = parseFloat(document.getElementById('sgpa5').value);
        const sgpa6 = parseFloat(document.getElementById('sgpa6').value);
    
        const targetCgpa = parseFloat(document.getElementById('targetCgpa').value);

        // Check for invalid or empty inputs
        if (
            isNaN(sgpa1) || isNaN(sgpa2) || isNaN(sgpa3) || 
            isNaN(sgpa4) || isNaN(sgpa5) || isNaN(sgpa6) || isNaN(targetCgpa)
        ) {
            resultDisplay.textContent = 'Please enter valid numerical values for all fields.';
            return;
        }

        // Calculate the current CGPA
        const currentCgpa = (sgpa1 + sgpa2 + sgpa3 + sgpa4 + sgpa5 + sgpa6) / 6;

        // Display the result, rounded to two decimal places
        resultDisplay.textContent = `Your current CGPA is: ${currentCgpa.toFixed(2)}`;
    });
});

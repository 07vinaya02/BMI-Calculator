document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const input1 = document.querySelector('.input1');
    const input2 = document.querySelector('.input2');
    const resultDisplay = document.querySelector('.result');

    button.addEventListener('click', function() {
        const weight = parseFloat(input1.value);
        const height = parseFloat(input2.value);

        if (!isNaN(weight) && !isNaN(height) && height > 0) {
            const bmi = (weight / ((height/100) * (height/100))).toFixed(2);
            resultDisplay.textContent = `Your BMI is ${bmi}`;
        } else {
            resultDisplay.textContent = 'Please enter valid weight and height!';
        }
    });
});




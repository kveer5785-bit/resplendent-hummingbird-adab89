function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const resultDiv = document.getElementById('bmi-result');

    if (!weight || !height || height <= 0 || weight <= 0) {
        resultDiv.style.color = '#ff4757';
        resultDiv.innerHTML = 'कृपया सही वजन और ऊंचाई डालें!';
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    let status = '';
    let color = '';

    if (bmi < 18.5) {
        status = 'Underweight (कम वजन)';
        color = '#ffa502';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal / Fit (सामान्य वजन)';
        color = '#2ed573';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight (अधिक वजन)';
        color = '#ffa502';
    } else {
        status = 'Obese (मोटापा)';
        color = '#ff4757';
    }

    resultDiv.style.color = color;
    resultDiv.innerHTML = `आपका BMI: <b>${bmi}</b><br><span style="font-size: 14px;">(${status})</span>`;
}
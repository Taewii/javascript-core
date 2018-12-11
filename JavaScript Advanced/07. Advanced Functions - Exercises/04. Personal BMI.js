function BMICalc(name, age, weight, height) {
  const BMI = Math.round(weight / Math.pow(height / 100, 2));
  const status = getStatus(BMI);

  const obj = {
    name,
    personalInfo: {
      age,
      weight,
      height,
    },
    BMI,
    status,
  };

  if (obj.status === 'obese') {
    obj.recommendation = 'admission required';
  }

  return obj;

  function getStatus() {
    if (BMI < 18.5) {
      return 'underweight';
    } else if (BMI < 25) {
      return 'normal';
    } else if (BMI < 30) {
      return 'overweight';
    } else {
      return 'obese';
    }
  }
}

console.log(BMICalc('Peter', 29, 75, 182));
console.log(BMICalc('Honey Boo Boo', 9, 57, 137));
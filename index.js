function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 

  const bmi = weight / (height/100) **2 ; 
  let bmiStatus;

  if (bmi < 18.5) 
  {
    bmiStatus = "Under weight"
  }

  else if (bmi < 25 && bmi >= 18.5)
  {
    bmiStatus = "healthy weight"
  }
  else if (bmi < 30 && bmi >=25)
  {
    bmiStatus = "over weight"
  }
  else if (bmi >= 30)
  {
    bmiStatus = "Above obesity"
  }
  let gender; 
  if (male) {
    gender = "Male";
  } else {
    gender = "Female";
  }
  
  alert (
  `Weight: ${weight} 
  Height: ${height}
  Age: ${age}
  Gender: ${gender}
  -------
  BMI is: ${bmi}
  Your body status is: ${bmiStatus}`
  );


} 

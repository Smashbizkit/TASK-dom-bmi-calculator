function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 
  
  let bmi = weight / ((height/100) ^2) ; 
  alert(bmi) ;

  if (bmi <18.5) 
  {alert("Under weight")}

  else if (bmi <2.5 && bmi >= 18.5)
  {
    alert("healthy weight")
  }
  else if (bmi <30 && bmi >=25)
  {
    alert("over weight")
  }
  else if (bmi >= 30)
  {
    alert ("Above obesity")
  }
  
  
} 
let para = document.getElementById("para");

function calcBmi(event) {
  event.preventDefault();
  let weight = document.getElementById("weight").valueAsNumber;
  let height = document.getElementById("height").valueAsNumber;
  let heading = document.getElementById("heading");
  let bmi

  if (!isNaN(weight) && !isNaN(height)){
    bmi = (weight/(height/100)**2).toFixed(2);
    heading.textContent = "Your BMI is "+bmi;
  }
  else {
    heading.textContent = "Please give Weight & Height";
  }

  if (bmi < 18.5) {
    para.textContent = "You need to gain 😟"
  }
  else if(bmi >= 18.5 && bmi <= 24.9){
    para.textContent = "Keep it up 💪👏"
  }
  else if(bmi >= 25 && bmi <=29.9){
    para.textContent = "You need to lose some 😝"
  }
  else if(bmi >= 30){
    para.textContent = "Take your weight seriously 😥"
  }
}

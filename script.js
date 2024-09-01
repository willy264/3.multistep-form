const stepOne = document.querySelector('.step1'),
          stepTwo = document.querySelector('.step2'),
          stepThree = document.querySelector('.step3'),
          stepFour = document.querySelector('.step4'),
          stepFive = document.querySelector('.step5'); 

let btnOne = document.querySelector('#btnOne'),
      btnTwo = document.querySelector('#btnTwo'),
      btnThree = document.querySelector('#btnThree'),
      btnFour = document.querySelector('#btnFour'),
      changeBtn = document.querySelector('.active'),

      prevTwo = document.querySelector('#prevTwo'),
      prevThree = document.querySelector('#prevThree'),
      prevFour = document.querySelector('#prevFour'),

      circleOne = document.querySelector('#circleOne'),
      circleTwo = document.querySelector('#circleTwo'),
      circleThree = document.querySelector('#circleThree'),
      circleFour = document.querySelector('#circleFour');
  
let emailInput = document.querySelector('#email'),
        emailError = document.querySelector('.emailError'),
        emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        nameInput = document.querySelector('#name'),
        nameError = document.querySelector('.nameError'),
        nameCheck = /^[a-zA-Z-\s]+$/,
        numberInput = document.querySelector("#number"),
        numberError = document.querySelector(".numberError"),
        numberCheck = /^[0-9\s]+$/;






btnOne.addEventListener('click', () => {
  checkName();
  checkEmail();
  checkNumber();
  setTimeout(() => {
    btnOne.style.backgroundColor = "var(--Marine-blue";
    Achieve();
  }, 1000);
})

btnTwo.addEventListener('click', () => {
  if (document.querySelector(".total-text").innerHTML == "") {
    console.log(document.querySelector(".total-text").innerHTML);
    document.querySelector(".total-text").innerHTML = "0";
    console.log(document.querySelector(".total-text").innerHTML);
  }
  checkPlan();
})

btnThree.addEventListener('click', () => {
  stepFour.style.display = 'grid';
  stepThree.style.display = 'none';
  circleThree.style.color = "var(--Marine-blue)";
  circleThree.style.backgroundColor = "var(--Light-blue)";
  
  const addOns = document.getElementsByName('online').forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.querySelector(".total-price").innerHTML);
      const planPrice = document.querySelector(".total-price").innerHTML;
      console.log(planPrice);
      document.querySelector(".total-price").innerHTML = parseInt(planPrice) + parseInt(radio.value);
    }
  })
})

changeBtn.addEventListener('click', () => {
  stepTwo.style.display = 'grid';
  stepFour.style.display = 'none';
  circleTwo.style.color = "var(--Marine-blue)";
  circleTwo.style.backgroundColor = "var(--Light-blue)";
  circleFour.style.color = "var(--White)";
  circleFour.style.backgroundColor = "transparent";

  const addOns = document.getElementsByName('online').forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.querySelector(".total-price").innerHTML);
      const planPrice = document.querySelector(".total-price").innerHTML;
      console.log(planPrice);
      document.querySelector(".total-price").innerHTML = parseInt(planPrice) - parseInt(radio.value);
    }
  })
})

btnFour.addEventListener('click', () => {
  if (document.querySelector('#finishPlan').innerHTML == "Choose a plan") {
    stepFour.style.display = 'grid';
    stepFive.style.display = 'none';
  } else {
    stepFour.style.display = 'none';
    stepFive.style.display = 'grid';
  }
})

prevTwo.addEventListener('click', () => {
  stepOne.style.display = 'grid';
  stepTwo.style.display = 'none';
  circleOne.style.backgroundColor = 'transparent'
  circleOne.style.color = 'var(--White)'
})
prevThree.addEventListener('click', () => {
  stepTwo.style.display = 'grid';
  stepThree.style.display = 'none';
  circleTwo.style.backgroundColor = 'transparent'
  circleTwo.style.color = 'var(--White)'
})
prevFour.addEventListener('click', () => {
  stepThree.style.display = 'grid';
  stepFour.style.display = 'none';
  circleThree.style.backgroundColor = 'transparent'
  circleThree.style.color = 'var(--White)';

  const addOns = document.getElementsByName('online').forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.querySelector(".total-price").innerHTML);
      const planPrice = document.querySelector(".total-price").innerHTML;
      console.log(planPrice);
      document.querySelector(".total-price").innerHTML = parseInt(planPrice) - parseInt(radio.value);
    }
  })
})








function checkPlan() {
  if (document.querySelector('#finishPlan').innerHTML == 'Choose a plan') {
    stepOne.style.display = 'none';
    stepTwo.style.display = 'grid';

    circleOne.style.color = "white";
    circleOne.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circleTwo.style.backgroundColor = "rgb(255, 255, 255)";
    circleTwo.style.color = "black";  
  } else {
    stepTwo.style.display = "none";
    stepThree.style.display = "grid";

    circleTwo.style.color = "var(--Marine-blue)";
    circleTwo.style.backgroundColor = "var(--Light-blue)";

    // circleThree.style.backgroundColor = "rgb(255, 255, 255)";
    // circleThree.style.color = "black";
  }
}

function checkName () {
  if (nameInput.value == ''){
    nameError.innerHTML = 'This field is required'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (nameCheck.test(nameInput.value) == false) {
    nameError.innerHTML = "Can't use number or symbols";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (nameInput.value !== ''){
    nameError.innerHTML = ''
  } 
}

function checkEmail() {
  if (emailInput.value == "") {
    emailError.innerHTML = "This field is required";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (emailCheck.test(emailInput.value) == false) {
    emailError.innerHTML = "Please enter a valid e-mail";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else {
    emailError.innerHTML = "";
  }
}

function checkNumber() {
  if (numberInput.value == "") {
    numberError.innerHTML = "This field is required";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (numberCheck.test(numberInput.value) == false) {
    numberError.innerHTML = "Must contain number";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (numberInput.value.length !== 11) {
    numberError.innerHTML = "Invalid Phone Number";
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else {
    numberError.innerHTML = "";
  }
}

function Achieve() {
  if ( nameInput.value.length !== 0 && nameCheck.test(nameInput.value) === true && emailInput.value.length !== 0 && emailCheck.test(emailInput.value) === true && numberInput.value.length === 11 && numberCheck.test(numberInput.value) == true) {
    stepOne.style.display = 'none';
    stepTwo.style.display = 'grid';

    circleOne.style.color = "var(--Marine-blue)";
    circleOne.style.backgroundColor = "var(--Light-blue)";
  }
}

const planPrice = "0";
console.log(planPrice);

function getPrice1() {
  const planPrice = "9";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}

function getPrice2() {
  const planPrice = "12";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice3() {
  const planPrice = "15";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice4() {
  const planPrice = "90";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice5() {
  const planPrice = "120";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}
function getPrice6() {
  const planPrice = "150";
  console.log(planPrice);
  document.getElementById("totalPrice").innerHTML = planPrice;
}


const stepOne = document.querySelector('.step1'),
          stepTwo = document.querySelector('.step2'),
          stepThree = document.querySelector('.step3'),
          stepFour = document.querySelector('.step4'),
          stepFive = document.querySelector('.step5'); 

let btnOne = document.querySelector('#btnOne'),
      btnTwo = document.querySelector('#btnTwo'),
      btnThree = document.querySelector('#btnThree'),
      btnFour = document.querySelector('#btnFour'),

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

})

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
  circleThree.style.color = 'var(--White)'
})
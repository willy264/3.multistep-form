const stepOne = document.querySelector('.step1'),
          stepTwo = document.querySelector('.step2'),
          stepThree = document.querySelector('.step3'),
          stepFour = document.querySelector('.step4'),
          stepFive = document.querySelector('.step5'),

          cardOne = document.querySelector('#cardOne'),
          cardTwo = document.querySelector('#cardTwo'),
          cardThree = document.querySelector('#cardThree'),
          cardFour = document.querySelector('#cardFour'),
          cardFive = document.querySelector('#cardFive'),
          cardSix = document.querySelector('#cardSix');

let btnOne = document.querySelector('#btnOne'),
      btnTwo = document.querySelector('#btnTwo'),
      btnThree = document.querySelector('#btnThree'),
      btnFour = document.querySelector('#btnFour'),
      changeBtn = document.querySelector('.active'),
      resetBtn = document.querySelector('.slider')

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
    document.querySelector(".total-text").innerHTML = "0";
  }
  checkPlan();
  circleTwo.classList.remove('selected')
  circleThree.classList.add('selected')
})

btnThree.addEventListener('click', () => {
  stepFour.style.display = 'grid';
  stepThree.style.display = 'none';
  circleThree.classList.remove('selected')
  circleFour.classList.add('selected')
  
  const addOns = document.querySelectorAll('#online').forEach(radio => {
    if (radio.checked) {
      const planPrice = document.querySelector(".total-price").innerHTML;
      document.querySelector(".total-price").innerHTML = `${parseInt(planPrice) + parseInt(radio.value)} $`;
    }
  })
})

changeBtn.addEventListener('click', () => {
  stepTwo.style.display = 'grid';
  stepFour.style.display = 'none';
  circleFour.classList.remove('selected')
  circleTwo.classList.add('selected')

  const addOns = document.querySelectorAll('#online').forEach(radio => {
    if (radio.checked) {
      const planPrice = document.querySelector(".total-price").innerHTML;
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
    circleFour.classList.add('selected')
  }
})








prevTwo.addEventListener('click', () => {
  stepOne.style.display = 'grid';
  stepTwo.style.display = 'none';
  circleOne.classList.add('selected')
  circleTwo.classList.remove('selected')
})
prevThree.addEventListener('click', () => {
  stepTwo.style.display = 'grid';
  stepThree.style.display = 'none';
  circleTwo.classList.add('selected')
  circleThree.classList.remove('selected')
})
prevFour.addEventListener('click', () => {
  stepThree.style.display = 'grid';
  stepFour.style.display = 'none';
  circleThree.classList.add('selected')
  circleFour.classList.remove('selected')

  const addOns = document.querySelectorAll('#online').forEach(radio => {
    if (radio.checked) {
      const planPrice = document.querySelector(".total-price").innerHTML;
      document.querySelector(".total-price").innerHTML = `${parseInt(planPrice) - parseInt(radio.value)}$`;
    }
  })
})

const yearBtn = document.querySelector('.yearly')
const monthBtn = document.querySelector('.monthly')
// const planMonth = document.querySelector('#planMonth')
// const year = document.querySelector('#year')
// const month = document.querySelector('#month')

checkBox = document.querySelector('.slider').addEventListener('click', event => {
  if (event.target.checked) {
    planYear.style.display = "flex";
    planMonth.style.display = "none";
    year.style.display = "grid";
    month.style.display = "none";
    yearBtn.classList.add('on')
    monthBtn.classList.remove('on')
  } else {
    planYear.style.display = "none";
    planMonth.style.display = "flex";
    year.style.display = "none";
    month.style.display = "grid";
    monthBtn.classList.add('on')
    yearBtn.classList.remove('on')
  }
})

function cardClicked(selector) {
  const checkCard = document.querySelector(selector)
  if (!checkCard.classList.contains('clicked')) {
    checkPrevCard()
    checkCard.classList.add('clicked')
  } else {
    checkCard.classList.remove('clicked')
  }
}
function checkPrevCard() {
  const prevButCheck = document.querySelector('.clicked')
  if (prevButCheck) {
    prevButCheck.classList.remove('clicked')
  } 
}


checkBox = document.querySelector('#cardOne').addEventListener('click', () => {
  cardClicked('#cardOne')

  document.querySelector("#finishPlan").innerHTML = "Arcade (monthly)";
  document.querySelector("#finishPrice").innerHTML = "9$/mo";
  document.querySelector(".total-text").innerHTML = "Total (per month)";
})
checkBox = document.querySelector("#cardTwo").addEventListener("click", () => {
  cardClicked('#cardTwo')

  document.querySelector("#finishPlan").innerHTML = "Advanced (monthly)";
  document.querySelector("#finishPrice").innerHTML = "12$/mo";
  document.querySelector(".total-text").innerHTML = "Total (per month)";
});
checkBox = document .querySelector("#cardThree").addEventListener("click", ()=> {
  cardClicked('#cardThree')

  document.querySelector("#finishPlan").innerHTML = "Pro (monthly)";
  document.querySelector("#finishPrice").innerHTML = "15$/mo";
  document.querySelector(".total-text").innerHTML = "Total (per month)";
});
checkBox = document.querySelector("#cardFour").addEventListener("click", () => {
  cardClicked('#cardFour')

  document.querySelector("#finishPlan").innerHTML = "Arcade (yearly)";
  document.querySelector("#finishPrice").innerHTML = "90$/yr";
  document.querySelector(".total-text").innerHTML = "Total (per year)";
});
checkBox = document.querySelector("#cardFive").addEventListener("click", () => {
  cardClicked('#cardFive')

  document.querySelector("#finishPlan").innerHTML = "Advanced (yearly)";
  document.querySelector("#finishPrice").innerHTML = "12O$/yr";
  document.querySelector(".total-text").innerHTML = "Total (per year)";
});
checkBox = document.querySelector("#cardSix").addEventListener("click", () => {
  cardClicked('#cardSix')

  document.querySelector("#finishPlan").innerHTML = "Pro (yearly)";
  document.querySelector("#finishPrice").innerHTML = "150$/yr";
  document.querySelector(".total-text").innerHTML = "Total (per year)";
});




checkBox = document.querySelector(".onlineMonth").addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#onlinePrice").innerHTML = "+1$/mo";
    document.querySelector(".total-text").innerHTML = "Total (per month)";
  } else {
    document.querySelector("#onlinePrice").innerHTML = "+0$/mo";
  }
});
checkBox = document.querySelector(".storageMonth").addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#storagePrice").innerHTML = "+2$/mo";
    document.querySelector(".total-text").innerHTML = "Total (per month)";
  } else {
    document.querySelector("#storagePrice").innerHTML = "+0$/mo";
  }
});
checkBox = document.querySelector(".customizableMonth").addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#customizablePrice").innerHTML = "+2$/mo";
    document.querySelector(".total-text").innerHTML = "Total (per month)";
  } else {
    document.querySelector("#customizablePrice").innerHTML = "+0$/mo";
  }
});
checkBox = document.querySelector(".onlineYear").addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#onlinePrice").innerHTML = "+10$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  } else {
    document.querySelector("#onlinePrice").innerHTML = "+0$yr";
  }
});
checkBox = document.querySelector(".storageYear").addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#storagePrice").innerHTML = "+20$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  } else {
    document.querySelector("#storagePrice").innerHTML = "+0$/yr";
  }
});
checkBox = document.querySelector('.customizableYear').addEventListener("click", event => {
  if (event.target.checked) {
    document.querySelector("#customizablePrice").innerHTML = "+20$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  } else {
    document.querySelector("#customizablePrice").innerHTML = "+0$/yr";
  }
});

resetBtn.addEventListener('click', () =>  {
  document.querySelector("#onlineMonth").checked = false;
  document.querySelector("#storageMonth").checked = false;
  document.querySelector("#customizableMonth").checked = false;
  document.querySelector("#onlineYear").checked = false;
  document.querySelector("#storageYear").checked = false;
  document.querySelector("#customizableYear").checked = false;

  document.querySelector("#onlinePrice").innerHTML = "+0$";
  document.querySelector("#storagePrice").innerHTML = "+0$";
  document.querySelector("#customizablePrice").innerHTML = "+0$";

  document.querySelector('#finishPlan').innerHTML == 'Choose a plan';
  document.querySelector("#finishPrice").innerHTML = "0$";
  
  cardOne.style.backgroundColor = "var(--White)";
  cardOne.style.border = " solid 1px var(--Light-gray)";
  cardThree.style.backgroundColor = "var(--White)";
  cardThree.style.border = " solid 1px var(--Light-gray)";
  cardTwo.style.backgroundColor = "var(--White)";
  cardTwo.style.border = " solid 1px var(--Light-gray)";
  cardFour.style.backgroundColor = "var(--White)";
  cardFour.style.border = " solid 1px var(--Light-gray)";
  cardFive.style.backgroundColor = "var(--White)";
  cardFive.style.border = " solid 1px var(--Light-gray)";
  cardSix.style.backgroundColor = "var(--White)";
  cardSix.style.border = " solid 1px var(--Light-gray)";
})




function checkPlan() {
  if (document.querySelector('#finishPlan').innerHTML == 'Choose a plan') {
    stepOne.style.display = 'none';
    stepTwo.style.display = 'grid';
  } else {
    stepTwo.style.display = "none";
    stepThree.style.display = "grid";
  }
}

function checkName () {
  if (nameInput.value == ''){
    nameError.innerHTML = 'This field is required'
    document.querySelector('#name').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (nameCheck.test(nameInput.value) == false) {
    nameError.innerHTML = "Can't use number or symbols";
    document.querySelector('#name').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (nameInput.value !== ''){
    nameError.innerHTML = ''
    document.querySelector('#name').style.border = '2px solid var(--Purplish-blue)'
  } 
}

function checkEmail() {
  if (emailInput.value == "") {
    emailError.innerHTML = "This field is required";
    document.querySelector('#email').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (emailCheck.test(emailInput.value) == false) {
    emailError.innerHTML = "Please enter a valid e-mail";
    document.querySelector('#email').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else {
    emailError.innerHTML = "";
    document.querySelector('#email').style.border = '2px solid var(--Purplish-blue)'
  }
}

function checkNumber() {
  if (numberInput.value == "") {
    numberError.innerHTML = "This field is required";
    document.querySelector('#number').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (numberCheck.test(numberInput.value) == false) {
    numberError.innerHTML = "Must contain number";
    document.querySelector('#number').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else if (numberInput.value.length !== 11) {
    numberError.innerHTML = "Invalid Phone Number";
    document.querySelector('#number').style.border = '1px solid var(--Strawberry-red)'
    btnOne.style.backgroundColor = "var(--Light-Marine-blue";
  } else {
    numberError.innerHTML = "";
    document.querySelector('#number').style.border = '2px solid var(--Purplish-blue)'
  }
}

function Achieve() {
  if ( nameInput.value.length !== 0 && nameCheck.test(nameInput.value) === true && emailInput.value.length !== 0 && emailCheck.test(emailInput.value) === true && numberInput.value.length === 11 && numberCheck.test(numberInput.value) == true) {
    stepOne.style.display = 'none';
    stepTwo.style.display = 'grid';

    circleOne.classList.remove('selected')
    circleTwo.classList.add('selected')
  }
}






const planPrice = "0";
console.log(planPrice);

cardOne.addEventListener('click', () => {
  const planPrice = "9";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})
cardTwo.addEventListener('click', () => {
  const planPrice = "12";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})
cardThree.addEventListener('click', () => {
  const planPrice = "15";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})
cardFour.addEventListener('click', () => {
  const planPrice = "90";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})
cardFive.addEventListener('click', () => {
  const planPrice = "120";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})
cardSix.addEventListener('click', () => {
  const planPrice = "150";
  console.log(planPrice);
  document.querySelector(".total-price").innerHTML = planPrice
})



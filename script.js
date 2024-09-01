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
      resetBtn = document.querySelector('#slider')

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
  
  const addOns = document.querySelector('#online').forEach(radio => {
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

  const addOns = document.querySelector('#online').forEach(radio => {
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

  const addOns = document.querySelector('#online').forEach(radio => {
    if (radio.checked) {
      console.log(radio.value);
      console.log(document.querySelector(".total-price").innerHTML);
      const planPrice = document.querySelector(".total-price").innerHTML;
      console.log(planPrice);
      document.querySelector(".total-price").innerHTML = parseInt(planPrice) - parseInt(radio.value);
    }
  })
})

// const planYear = document.querySelector('#planYear')
// const planMonth = document.querySelector('#planMonth')
// const year = document.querySelector('#year')
// const month = document.querySelector('#month')

checkBox = document.querySelector('#slider').addEventListener('click', event => {
  if (event.target.checked) {
    planYear.style.display = "flex";
    planMonth.style.display = "none";
    year.style.display = "grid";
    month.style.display = "none";
  } else {
    planYear.style.display = "none";
    planMonth.style.display = "flex";
    year.style.display = "none";
    month.style.display = "grid";
  }
})

checkBox = document.querySelector('#cardOne').addEventListener('click', event => {
  cardOne.style.backgroundColor = "hsl(217, 100%, 97%)";
  cardOne.style.border = " solid 1px hsl(213, 96%, 18%)";

  cardTwo.style.backgroundColor = "white";
  cardTwo.style.border = " solid 1px hsl(229, 24%, 87%)";
  cardThree.style.backgroundColor = "white";
  cardThree.style.border = " solid 1px hsl(229, 24%, 87%)";
  cardFour.style.backgroundColor = "white";
  cardFour.style.border = " solid 1px hsl(229, 24%, 87%)";
  cardFive.style.backgroundColor = "white";
  cardFive.style.border = " solid 1px hsl(229, 24%, 87%)";
  cardSix.style.backgroundColor = "white";
  cardSix.style.border = " solid 1px hsl(229, 24%, 87%)";

  document.querySelector("#finishPlan").innerHTML = "Arcade (monthly)";
  document.querySelector("#finishPrice").innerHTML = "9$/mo";
  document.querySelector(".total-text").innerHTML = "Total (per month)";
})

checkBox = document
  .querySelector("cardTwo")
  .addEventListener("click", event => {
    cardTwo.style.backgroundColor = "hsl(217, 100%, 97%)";
    cardTwo.style.border = " solid 1px hsl(213, 96%, 18%)";

    cardOne.style.backgroundColor = "white";
    cardOne.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardThree.style.backgroundColor = "white";
    cardThree.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFour.style.backgroundColor = "white";
    cardFour.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFive.style.backgroundColor = "white";
    cardFive.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardSix.style.backgroundColor = "white";
    cardSix.style.border = " solid 1px hsl(229, 24%, 87%)";

    document.querySelector("#finishPlan").innerHTML = "Advanced (monthly)";
    document.querySelector("#finishPrice").innerHTML = "12$/mo";
    document.querySelector(".total-text").innerHTML = "Total (per month)";
  });
checkBox = document
  .querySelector("cardThree")
  .addEventListener("click", event => {
    cardThree.style.backgroundColor = "hsl(217, 100%, 97%)";
    cardThree.style.border = " solid 1px hsl(213, 96%, 18%)";

    cardTwo.style.backgroundColor = "white";
    cardTwo.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardOne.style.backgroundColor = "white";
    cardOne.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFour.style.backgroundColor = "white";
    cardFour.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFive.style.backgroundColor = "white";
    cardFive.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardSix.style.backgroundColor = "white";
    cardSix.style.border = " solid 1px hsl(229, 24%, 87%)";

    document.querySelector("#finishPlan").innerHTML = "Pro (monthly)";
    document.querySelector("#finishPrice").innerHTML = "15$/mo";
    document.querySelector(".total-text").innerHTML = "Total (per month)";
  });
checkBox = document
  .querySelector("cardFour")
  .addEventListener("click", event => {
    cardFour.style.backgroundColor = "hsl(217, 100%, 97%)";
    cardFour.style.border = " solid 1px hsl(213, 96%, 18%)";

    cardOne.style.backgroundColor = "white";
    cardOne.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardThree.style.backgroundColor = "white";
    cardThree.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardTwo.style.backgroundColor = "white";
    cardTwo.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFive.style.backgroundColor = "white";
    cardFive.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardSix.style.backgroundColor = "white";
    cardSix.style.border = " solid 1px hsl(229, 24%, 87%)";

    document.querySelector("#finishPlan").innerHTML = "Arcade (yearly)";
    document.querySelector("#finishPrice").innerHTML = "90$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  });
checkBox = document
  .querySelector("cardFive")
  .addEventListener("click", event => {
    cardFive.style.backgroundColor = "hsl(217, 100%, 97%)";
    cardFive.style.border = " solid 1px hsl(213, 96%, 18%)";

    cardTwo.style.backgroundColor = "white";
    cardTwo.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardThree.style.backgroundColor = "white";
    cardThree.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardOne.style.backgroundColor = "white";
    cardOne.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFour.style.backgroundColor = "white";
    cardFour.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardSix.style.backgroundColor = "white";
    cardSix.style.border = " solid 1px hsl(229, 24%, 87%)";

    document.querySelector("#finishPlan").innerHTML = "Advanced (yearly)";
    document.querySelector("#finishPrice").innerHTML = "12O$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  });
checkBox = document
  .querySelector("cardSix")
  .addEventListener("click", event => {
    cardSix.style.backgroundColor = "hsl(217, 100%, 97%)";
    cardSix.style.border = " solid 1px hsl(213, 96%, 18%)";

    cardOne.style.backgroundColor = "white";
    cardOne.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardThree.style.backgroundColor = "white";
    cardThree.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardTwo.style.backgroundColor = "white";
    cardTwo.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFour.style.backgroundColor = "white";
    cardFour.style.border = " solid 1px hsl(229, 24%, 87%)";
    cardFive.style.backgroundColor = "white";
    cardFive.style.border = " solid 1px hsl(229, 24%, 87%)";

    document.querySelector("#finishPlan").innerHTML = "Pro (yearly)";
    document.querySelector("#finishPrice").innerHTML = "150$/yr";
    document.querySelector(".total-text").innerHTML = "Total (per year)";
  });




  checkBox = document
  .getElementById("onlineMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+1$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableMois")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+2$/mo";
      document.getElementById("modeTotal").innerHTML = "Total (per month)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("onlineAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("onlinePrice").innerHTML = "+10$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("onlinePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("storageAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("storagePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("storagePrice").innerHTML = "+0$";
    }
  });
checkBox = document
  .getElementById("customizableAnnee")
  .addEventListener("click", event => {
    if (event.target.checked) {
      document.getElementById("customizablePrice").innerHTML = "+20$/yr";
      document.getElementById("modeTotal").innerHTML = "Total (per year)";
    } else {
      document.getElementById("customizablePrice").innerHTML = "+0$";
    }
  });

// resetBtn.addEventListener('click', () =>  {
//   document.querySelector("#onlineMonth").checked = false;
//   document.querySelector("#storageMonth").checked = false;
//   document.querySelector("#customizableMonth").checked = false;
//   document.querySelector("#onlineYear").checked = false;
//   document.querySelector("#storageYear").checked = false;
//   document.querySelector("#customizableYear").checked = false;

//   document.querySelector("#onlinePrice").innerHTML = "+0$";
//   document.querySelector("#storagePrice").innerHTML = "+0$";
//   document.querySelector("#customizablePrice").innerHTML = "+0$";
//   document.querySelector("#onlinePrice").innerHTML = "+0$";
//   document.querySelector("#storagePrice").innerHTML = "+0$";
//   document.querySelector("#customizablePrice").innerHTML = "+0$";

//   document.querySelector('#finishPlan').innerHTML == 'Choose a plan';
//   document.querySelector("#finishPrice").innerHTML = "0$";
  
//   cardOne.style.backgroundColor = "var(--White)";
//   cardOne.style.border = " solid 1px var(--Light-gray)";
//   cardThree.style.backgroundColor = "var(--White)";
//   cardThree.style.border = " solid 1px var(--Light-gray)";
//   cardTwo.style.backgroundColor = "var(--White)";
//   cardTwo.style.border = " solid 1px var(--Light-gray)";
//   cardFour.style.backgroundColor = "var(--White)";
//   cardFour.style.border = " solid 1px var(--Light-gray)";
//   cardFive.style.backgroundColor = "var(--White)";
//   cardFive.style.border = " solid 1px var(--Light-gray)";
//   cardSix.style.backgroundColor = "var(--White)";
//   cardSix.style.border = " solid 1px var(--Light-gray)";
// })




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



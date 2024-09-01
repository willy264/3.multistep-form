const step2 = document.querySelector('.stepTwo')

step2.addEventListener('click', () => {
  
})

function checkName () {
  let nameInput = document.querySelector('#name'),
        nameError = document.querySelector('.nameError'),
        nameCheck = /^[a-zA-Z-\s]+$/;

  if (nameInput.value == ''){
    nameError.innerHTML = 'This field is required'
  } else if (nameInput.value !== ''){
    nameError.innerHTML = ''
  } 
  if (nameCheck.test(nameInput.value) == false) {
    nameError.innerHTML = "Can't use number or symbols"
  }
}

function checkMail() {
  let nameInput = document.querySelector('#name'),
        nameError = document.querySelector('.nameError'),
        emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (myMailInput.value.trim() == "") {
    myNumError.innerHTML = "This field is required";
  } else if (emailCheck.test(myMailInput.value) == false) {
    myNumError.innerHTML = "Please enter a valid e-mail";
  } else {
    myNumError.innerHTML = "";
  }
}

function checkNumber() {
  let myNumInput = document.querySelector("#number"),
        myNumError = document.querySelector("errorNum"),
        myNumRegex = /^[0-9\s]+$/;

  if (myNumInput.value.trim() == "") {
    myNumError.innerHTML = "This field is required";
  } else if (myNumRegex.test(myNumInput.value) == false) {
    myNumError.innerHTML = "Must contain number";
  } else if (myNumInput.value.trim().length !== 10) {
    myNumError.innerHTML = "Invalid Phone Number";
  } else {
    myNumError.innerHTML = "";
  }
}

function Achieve() {
  let myNumInput = document.getElementById("infoNumber");
  let myNameInput = document.getElementById("infoName");
  let myMailInput = document.getElementById("infoMail");
  let myNameRegex = /^[a-zA-Z-\s]+$/;
  let myNumRegex = /^[0-9\s]+$/;
  let emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (
    myNumInput.value.trim().length === 10 &&
    myNumRegex.test(myNumInput.value) == true &&
    myMailInput.value.trim().length !== 0 &&
    emailCheck.test(myMailInput.value) === true &&
    myNameInput.value.trim().length !== 0 &&
    myNameRegex.test(myNameInput.value) === true
  ) {
    stepInfo.style.display = "none";
    stepPlan.style.display = "flex";
    circle1.style.color = "white";
    circle1.style.backgroundColor = "rgba(255, 255, 255, 0)";
    circle2.style.backgroundColor = "rgb(255, 255, 255)";
    circle2.style.color = "black";
  }
}
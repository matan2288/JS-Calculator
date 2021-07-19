//Select Input
let InputSelected = document.getElementById("InputID");
InputSelected.readOnly = true;
InputSelected.value = null;

//Select Bracket And Percentage operator and print them to input
for (i = 0; i < 2; i++) {
  let selectedTopOperatorButtons = document.querySelectorAll(".TopActivityBTN");
  // document.getElementById(`TopOperator${i}`)
  selectedTopOperatorButtons[i].id = `Top-Operator-BTN${i}`;
  let selectedBracketsOrPercBTNS = document.getElementById(
    `Top-Operator-BTN${i}`
  );
  selectedBracketsOrPercBTNS.addEventListener("click", () => {
    if (selectedBracketsOrPercBTNS) {
      InputSelected.value =
        InputSelected.value + selectedBracketsOrPercBTNS.innerHTML;
    }
  });
}

//Select Divide BTN
let divideBtnSelected = document.querySelector(".DIVIDE-BTN");
divideBtnSelected.addEventListener("click", () => {
  // InputSelected.value +
  InputSelected.value = InputSelected.value + divideBtnSelected.innerHTML;
});

//Select C BTN wich deletes 1 digit
document.querySelector(`.CE-BTN`).addEventListener("click", () => {
  InputSelected.value = InputSelected.value.substring(
    0,
    InputSelected.value.length - 1
  );
});

//Select AC BTN wich deletes the whole input value

document.querySelector(`.AC-BTN`).addEventListener("click", () => {
  InputSelected.value = null;
});

//

//Select SIDE Buttons
for (i = 0; i < 3; i++) {
  let getSideBtnsQS = document.querySelectorAll(".SideActivityBtn");

  getSideBtnsQS[i].id = `SIDE-BTN-Id${i}`;

  let getSideBtns = document.getElementById(`SIDE-BTN-Id${i}`);

  getSideBtns.addEventListener("click", () => {
    if (getSideBtns) {
      InputSelected.value = InputSelected.value + getSideBtns.innerHTML;
    }
  });
}

//Select Number Buttons
for (i = 0; i < 11; i++) {
  let getNumberButtons = document.querySelectorAll(".NumberBTN");
  //give the numbers IDS
  getNumberButtons[i].id = `Number-BTN-Id${i}`;

  let selectedNumberButtons = document.getElementById(`Number-BTN-Id${i}`);

  selectedNumberButtons.addEventListener("click", () => {
    if (selectedNumberButtons) {
      InputSelected.value =
        InputSelected.value + selectedNumberButtons.innerHTML;
    }
  });
}

let equalOperator = document.getElementById("EqualBTN");

let equalFunction = () => {
  if (eval(InputSelected.value) == undefined) {
    return false;
  } else InputSelected.value = eval(InputSelected.value);
};

window.onerror = () => {
  alert("Please Type A Valid Equation !");
  InputSelected.value = null;
  return true;
};

equalOperator.addEventListener("click", equalFunction);

//Get Element by id
const form = document.getElementById("gradeGenerator");
const input = document.getElementById("score");
const message = document.getElementById("scoree");

form.addEventListener("submit", (event) => {
  //Add event
  event.preventDefault(); //Prevents page reloading
  validateInput(input);
});
function validateInput(input) {
  console.log(input.value);
  const grade = input.value;

  // If grade is greater than 79 and less than 100: A
  //If grade is less than or equal to 60vand less than or equal to 79: B
  //If grade is greater than 49 and less than or equal to 59: C
  //If grade is greater than 40 and less than or equal to 49: D
  //If grade is greater than or equal to zer0 and less than 49 : E

  if (grade > 79 && grade < 100) {
    console.log("A");
    message.innerHTML = `<li>score A</li>`;
  } else if (grade >= 60 && grade <= 79) {
    console.log("B");
    message.innerHTML = `<li>score B</li>`;
  } else if (grade > 49 && grade <= 59) {
    console.log("C");
    message.innerHTML = `<li>score C</li>`;
  } else if (grade > 40 && grade <= 49) {
    console.log("D");
    message.innerHTML = `<li> score D</li>`;
  } else if (grade >= 0 && grade < 49) {
    console.log("E");
    message.innerHTML = `<li>score E</li>`;
  } else console.log("Input number between zero and 100");
}
//console.log(input.value);

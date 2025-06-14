// ✅ Step 1: Declare the function
function checkAnswer() {
  // ✅ Step 2: Store the correct answer
  const correctAnswer = "4";

  // ✅ Step 3: Get the user's selected option
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  const userAnswer = selectedOption ? selectedOption.value : null;

  // ✅ Step 4: Select the feedback element
  const feedback = document.getElementById("feedback");

  // ✅ Step 5: Compare and display result
  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "#28a745"; // green
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "#dc3545"; // red
  }
}

// ✅ Step 6: Add event listener to the submit button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);


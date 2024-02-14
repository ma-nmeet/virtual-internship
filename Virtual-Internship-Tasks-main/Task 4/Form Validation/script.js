const form = document.querySelector("form[name='Formfill']");
const usernameField = document.querySelector("input[name='Username']");
const emailField = document.querySelector("input[name='Email']");
const passwordField = document.querySelector("input[name='Password']");
const confirmPasswordField = document.querySelector("input[name='cPassword']");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  const username = usernameField.value.trim();
  const email = emailField.value.trim();
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  // Validation checks
  let errorMessage = "";

  if (username === "") {
    errorMessage += "Please enter your username.\n";
  }

  if (!isValidEmail(email)) {
    errorMessage += "Please enter a valid email address.\n";
  }

  if (password === "") {
    errorMessage += "Please enter your password.\n";
  } else if (password.length < 8) {
    errorMessage += "Password must be at least 8 characters long.\n";
  }

  if (confirmPassword !== password) {
    errorMessage += "Passwords do not match.\n";
  }

  if (errorMessage !== "") {
    alert(errorMessage);
    return;
  }

  // If all validations pass, submit the form
  console.log("Form validated successfully!");
  // You can now submit the form using AJAX or redirect to another page
});

// Function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

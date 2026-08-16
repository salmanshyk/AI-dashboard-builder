function togglePassword(inputId, button) {
  const input = document.getElementById(inputId);

  if (input.type === "password") {
    input.type = "text";
    button.textContent = "Hide";
  } else {
    input.type = "password";
    button.textContent = "Show";
  }
}


document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {

    event.preventDefault();

    const password =
      document.getElementById("password").value;

    const confirmPassword =
      document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {

      alert("Passwords do not match.");

      return;
    }

    alert("Registration form completed successfully!");
  });
  
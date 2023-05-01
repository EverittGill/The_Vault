const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  const response = await fetch("/api/userRoutes", {
    method: "POST",
    body: JSON.stringify({ name, email, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(); //TODO: INSERT Handlebar page
  } else {
    alert(response.statusText);
  }
};

const loginFormHandler = async (event) => {
  event.preventDefault()

  const email = document.querySelector("email-login").value.trim()
  const password = document.querySelector("password-login").value.trim()

  const response = await fetch("/api/")
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

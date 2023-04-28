const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-signup").value.trim();
  const username = document.querySelector("#usernmae-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  const response = await fetch("/api/userRoutes", {
    method: "POST",
    body: JSON.stringify({ name, username, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace(); //TODO: INSERT Handlebar page
  } else {
    alert(response.statusText);
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
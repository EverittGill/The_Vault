const signupFormHandler = async (event) => {
    console.log('signup form handle works');
    event.preventDefault();
  
    const name = document.querySelector("#account-name").value.trim();
    const email = document.querySelector("#e-mail").value.trim();
    const password = document.querySelector("#password").value.trim();
  
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });
  
    if (response.ok) {
      document.location.replace("/animation"); //TODO: INSERT Handlebar page
    } else {
      alert(response.statusText);
    }
  };

  document
  .querySelector('#account-signup')
  .addEventListener('click', signupFormHandler);
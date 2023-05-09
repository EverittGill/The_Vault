const loginFormHandler = async (event) => {
  event.preventDefault()

  const email = document.querySelector(".email-text-input").value.trim()
  const password = document.querySelector(".password-text-input").value.trim()

  const response = await fetch("/login", {
    method: 'POST',
    body: JSON.stringify({email, password}),
    headers: {'Content-Type': 'application/json'},
  })

  if (response.ok) {
    document.location.replace('/animation')
  } else {
    alert(response.statusText)
  }
}

document
  .querySelector('.login')
  .addEventListener('submit', loginFormHandler);
  
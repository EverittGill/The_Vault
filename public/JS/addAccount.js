const addAccount = async (event) => {
  event.preventDefault();
  const account_name = document.querySelector("#account-name").value.trim();
  const URL = document.querySelector("#account-url").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (URL && !URL.includes("https://www.")) {
    alert("please enter a URL with https://");
  }
  if (account_name && password) {
    const response = await fetch("/api/accounts", {
      method: "POST",
      body: JSON.stringify({ account_name, URL, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      document.location.replace("/homepage");
    } else {
      alert("Failed to create account");
    }
  }
};

document
  .querySelector(".add-account-btn")
  .addEventListener("click", addAccount);

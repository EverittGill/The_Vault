const ENCRYPTION_KEY = "MySuperSecretKey";

const accountBtnHandler = async (event) => {
  event.preventDefault();
  const accountName = document.querySelector("#account-name").value.trim();
  const URL = document.querySelector("#account-url").value.trim();
  const password = document.querySelector("#password").value.trim();
  if (accountName & password) {
    const response = await fetch("/api/accounts", {
      method: "POST",
      body: JSON.stringify({ accountName, URL, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      onclose()
      document.location.replace("/");
    } else {
      alert("Failed to add account");
    }
  }
};

const revealBtnHandler = async (event) => {
  console.log("here i am your reveal")
  const password = event.target.getAttribute("data-id");
  const shownPassword = event.target.previousElementSibling;
  const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
  shownPassword.textContent = decryptedPassword.toString(CryptoJS.enc.Utf8);
  return;
};

document
  .querySelector(".account-list")
  .addEventListener("click", revealBtnHandler);

document
  .querySelector(".modal-footer")
  .addEventListener("click", accountBtnHandler);

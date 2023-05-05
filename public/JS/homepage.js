const ENCRYPTION_KEY = "MySuperSecretKey";

const accountBtnHandler = async (event) => {
  event.preventDefault();
  const account_name = document.querySelector("#account-name").value.trim();
  const accountURL = document.querySelector("#account-url").value.trim();
  const password = document.querySelector("#password").value.trim();
  const response = await fetch("/api/accounts", {
    method: "POST",
    body: JSON.stringify({ account_name, accountURL, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert("Failed to add account");
  }
};

const revealBtnHandler = async (event) => {
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

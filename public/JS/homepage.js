const ENCRYPTION_KEY = "MySuperSecretKey";

const accountBtnHandler = async (event) => {
  event.preventDefault()
  const accountName = document.querySelector('#account-name')
  const url = document.querySelector('#url')
  const password = document.querySelector('#password')

  
}

const revealBtnHandler = async (event) => {
  const password = event.target.getAttribute("data-id");
  const shownPassword = event.target.previousElementSibling
  const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
  shownPassword.textContent = decryptedPassword.toString(CryptoJS.enc.Utf8)
  return;
};

document
  .querySelector(".account-list")
  .addEventListener("click", revealBtnHandler);

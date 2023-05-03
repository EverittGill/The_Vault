const ENCRYPTION_KEY = "MySuperSecretKey";

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

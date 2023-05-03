const ENCRYPTION_KEY = "MySuperSecretKey";

const revealBtnHandler = async (event) => {
  const password = event.target.getAttribute("data-id");
  const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
  console.log(decryptedPassword.toString(CryptoJS.enc.Utf8));
  return decryptedPassword;
};

document
  .querySelector(".account-list")
  .addEventListener("click", revealBtnHandler);

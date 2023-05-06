const ENCRYPTION_KEY = "MySuperSecretKey";

const revealPassword = async (event) => {
  if (event.target.closest('.show-tool')) {
    const shownPassword = event.target.closest('.show-tool').previousElementSibling;
    const encryptedPassword = shownPassword.getAttribute('data-password');
    const decryptedPassword = CryptoJS.AES.decrypt(encryptedPassword, ENCRYPTION_KEY).toString(CryptoJS.enc.Utf8);

    if (shownPassword.getAttribute('data-shown') === 'true') {
      // Hide the password
      shownPassword.textContent = '••••••••';
      shownPassword.setAttribute('data-shown', 'false');
      event.target.closest('.show-tool').querySelector('i').classList.replace('fa-eye-slash', 'fa-eye');
    } else {
      // Show the password
      shownPassword.textContent = decryptedPassword;
      shownPassword.setAttribute('data-shown', 'true');
      event.target.closest('.show-tool').querySelector('i').classList.replace('fa-eye', 'fa-eye-slash');
    }
  }
};

document
  .querySelector(".account-list")
  .addEventListener("click", revealPassword);

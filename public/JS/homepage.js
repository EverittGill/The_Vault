const ENCRYPTION_KEY = "MySuperSecretKey";


// writing a function that accepts inputted information from the modal on the homepage and sends it to the database then displays it on the homepage
// const accountBtnHandler = async (event) => {
//   event.preventDefault()
//   const accountName = document.querySelector('#account-name').value.trim();
//   const url = document.querySelector('#account-url').value.trim();
//   const password = document.querySelector('#password').value.trim();
// }

// writing a function that accepts inputted information from the modal on the homepage and sends it to the database then displays it on the homepage
const accountBtnHandler = async (event) => {
  event.preventDefault()
  const account_name = document.querySelector('#account-name').value.trim();
  const URL = document.querySelector('#account-url').value.trim();
  const password = document.querySelector('#password').value.trim();
  if (account_name && password) {
    const response = await fetch('/api/accounts', {
      method: 'POST',
      body: JSON.stringify({ account_name, URL, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/homepage');
    } else {
      alert('Failed to create account');
    }
  }
};



// BRUNO you wrote this stuff that's commented out. 
// I'm leaving it here for you to deal with incase I messed something up and you need to revert to this code.
// const revealBtnHandler = async (event) => {
//   const password = event.target.getAttribute("data-id");
//   const shownPassword = event.target.previousElementSibling
//   const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
//   shownPassword.textContent = decryptedPassword.toString(CryptoJS.enc.Utf8)
//   return;



// Everitt wrote this revealBtnHandler
const revealBtnHandler = async (event) => {
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
  .addEventListener("click", revealBtnHandler);

document
  .querySelector(".add-account-btn")
  .addEventListener("click", accountBtnHandler);
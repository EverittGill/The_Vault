const ENCRYPTION_KEY = "MySuperSecretKey";

<<<<<<< HEAD
const addAccount = async (event) => {
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

const revealPassword = async (event) => {
  const password = event.target.getAttribute("data-id");
  const shownPassword = event.target.previousElementSibling;
  const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
  shownPassword.textContent = decryptedPassword.toString(CryptoJS.enc.Utf8);
  return;
};

const logOut = async() => {
  const response = await fetch("/logout", {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};
=======
const accountBtnHandler = async (event) => {
  event.preventDefault()
  const accountName = document.querySelector('#account-name')
  const url = document.querySelector('#url')
  const password = document.querySelector('#password')

  
}
// BRUNO you wrote this stuff that's commented out. 
// I'm leaving it here for you to deal with incase I messed something up and you need to revert to this code.
// const revealBtnHandler = async (event) => {
//   const password = event.target.getAttribute("data-id");
//   const shownPassword = event.target.previousElementSibling
//   const decryptedPassword = CryptoJS.AES.decrypt(password, ENCRYPTION_KEY);
//   shownPassword.textContent = decryptedPassword.toString(CryptoJS.enc.Utf8)
//   return;



// Everitt wrote this revealBtnHandler
const revealBtnHandler = (event) => {
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
>>>>>>> 23237aca539f9df1d83e53f40f4140984eae811a

document
  .querySelector(".modal-footer")
  .addEventListener("click", addAccount);

document
  .querySelector(".account-list")
  .addEventListener("mouseover", revealPassword);

  document
    .querySelector("#logout")
    .addEventListener("click", logOut)

const ENCRYPTION_KEY = "MySuperSecretKey";
const 

decryptPassword = (password) => {
    const decryptedPassword = AES.decrypt(password, ENCRYPTION_KEY).toString();
    return decryptedPassword;
  };

const revealBtnHandler = async (event) => {
    if(event.)
}
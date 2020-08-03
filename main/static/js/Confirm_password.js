var password = document.getElementById("firstPass");
var confirm_password = document.getElementById("secondPass");
let button = document.getElementById('reg');
function validatePassword(){
  if(password.value!= confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
  } else {
    confirm_password.setCustomValidity('');
  }
}
button.addEventListener('click',validatePassword);

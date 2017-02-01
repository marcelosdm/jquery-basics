//Problem: Hints are fadeInn even when form is valid
//Solution: fadeOut and fadeIn them at appropriate times

var $password = $('#password');
var $confirmPassword = $('#confirm_password');
var $username = $('#username');

//fadeOut hints
$('form span').fadeOut();

function usernameValid(){
  return $username.val().length > 0;
}

function isPasswordValid(){
  return $password.val().length > 8;
}

function arePasswordsMatching(){
  return $password.val() === $confirmPassword.val();
}

function canSubmit(){
  return usernameValid() && isPasswordValid() && arePasswordsMatching();
}

function usernameEvent(){
  if(usernameValid()){
    $username.next().fadeOut();
  } else {
    $username.next().fadeIn();
  }
}

function passwordEvent(){
//Find out if password is valid
  if(isPasswordValid()){
  //fadeOut hint if valid
    $password.next().fadeOut();
  //Else fadeIn hint
  } else{
    $password.next().fadeIn();
  }  
}

function confirmPasswordEvent(){
//Find out if password and confirmation match
if(arePasswordsMatching()){
  //fadeOut hint if match
  $confirmPassword.next().fadeOut();
  //Else fadeIn hint
} else {
  $confirmPassword.next().fadeIn();
}

}

function enableSubmitEvent(){
  $('#submit').prop('disabled', !canSubmit());
}

$username.focus(usernameEvent).keyup(usernameEvent);

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent);

//When event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
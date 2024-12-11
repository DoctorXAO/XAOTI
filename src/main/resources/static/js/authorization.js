const signIn = document.getElementById('signIn');
const overlay = document.getElementById('overlay');
const signInWindow = document.getElementById('signInWindow');
const closeSignInWindow = document.getElementById('closeSignInWindow');
const signUp = document.getElementById('signUp');
const signUpWindow = document.getElementById('signUpWindow');
const closeSignUpWindow = document.getElementById('closeSignUpWindow');
const popUpSignIn = document.getElementById('popUpSignIn');

signIn.addEventListener('click', function() {
	overlay.classList.add('show');
	signInWindow.style.display = "flex";
});

closeSignInWindow.addEventListener('click', function() {
	overlay.classList.remove('show');
	signInWindow.style.display = "none";
})

signUp.addEventListener('click', function() {
	signInWindow.style.display = "none";
	signUpWindow.style.display = "flex";
})

closeSignUpWindow.addEventListener('click', function() {
	overlay.classList.remove('show');
	signUpWindow.style.display = "none";
})

popUpSignIn.addEventListener('click', function() {
	signInWindow.style.display = "flex";
	signUpWindow.style.display = "none";
})
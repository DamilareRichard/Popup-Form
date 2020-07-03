function openForm() {
	document.getElementById('myForm').style.display = 'block';
}

function closeForm() {
	document.getElementById('myForm').style.display = 'none';
}

const form = document.getElementById('myForm');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('login', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {

	const emailValue = email.value.trim();
	const passwordValue = email.value.trim();

	if(emailValue === ''){
		setErrorFor(email, 'Email cannot be empty');
	} else if(!isEmail (emailValue)) {
		setErrorFor(email, 'Email is not valid');

	} else {
		setSuccessFor(email);
	}


	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}
}

function setErrorFor(input, message) {
	const formContainer = input.parentElement;

	formContainer = 'form-container error';
}

function setSuccessFor(input) {
	const formContainer = input.parentElement;
	formContainer.className = 'form-container success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
// Element select

const elInputName = document.querySelector("input#name");
const elInputBirthday = document.querySelector("input#birthday");
const elInputEmail = document.querySelector("input#email");
const elInputPhone = document.querySelector("input#phone");

const elTextName = document.querySelector("#warn-name");
const elTextBirthday = document.querySelector("#warn-birthday");
const elTextEmail = document.querySelector("#warn-email");
const elTextPhone = document.querySelector("#warn-phone");

const elButtonReturn = document.querySelector("#button-return");
const elButtonSave = document.querySelector("#button-save");
//API

// function postUserAPI() {}

// Utility Function

function checkInput() {
	let nameCheck = true;
	let birthdayCheck = true;
	let emailCheck = true;
	let phoneCheck = true;
	hideError();

	const name = elInputName.value;
	const birthday = elInputBirthday.value;
	const email = elInputEmail.value;
	const phone = elInputPhone.value;

	// Check name
	if (name.length === 0) {
		nameCheck = false;
		elTextName.classList.remove("hidden");
		elTextName.querySelector("span").innerText = "Không được để trống";
	}

	if (nameCheck) {
		nameCheck = /[a-zA-Z\u0080-\uFFFF]/.test(name);
		if (!nameCheck) {
			elTextName.classList.remove("hidden");
			elTextName.querySelector("span").innerText = "Tên chỉ cho phép chữ";
		}
	}

	// Check birthday
	if (birthday.length === 0) {
		birthdayCheck = false;
		elTextBirthday.classList.remove("hidden");
		elTextBirthday.querySelector("span").innerText = "Không được để trống";
	}

	if (birthdayCheck) {
		birthdayCheck = /^(0[1-9]|[12]\d|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(birthday);
		if (!birthdayCheck) {
			elTextBirthday.classList.remove("hidden");
			elTextBirthday.querySelector("span").innerText = "Định dạng ngày sinh không đúng (dd/mm/yyyy)";
		}
	}

	// Check email
	if (email.length === 0) {
		emailCheck = false;
		elTextEmail.classList.remove("hidden");
		elTextEmail.querySelector("span").innerText = "Không được để trống";
	}

	// /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	if (emailCheck) {
		emailCheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
		if (!emailCheck) {
			elTextEmail.classList.remove("hidden");
			elTextEmail.querySelector("span").innerText = "Định dạng email không đúng";
		}
	}

	if (phone.length === 0) {
		phoneCheck = false;
		elTextPhone.classList.remove("hidden");
		elTextPhone.querySelector("span").innerText = "Không được để trống";
	}

	if (phoneCheck) {
		phoneCheck = /^\d{10}$/.test(phone);
		if (!phoneCheck) {
			elTextPhone.classList.remove("hidden");
			elTextPhone.querySelector("span").innerText = "Định dạng số điện thoại không đúng (10 số)";
		}
	}

	console.log(name, birthday, email, phone);
	console.log(nameCheck, birthdayCheck, emailCheck, phoneCheck);
	return nameCheck && birthdayCheck && emailCheck && phoneCheck;
}

function hideError() {
	elTextName.classList.add("hidden");
	elTextBirthday.classList.add("hidden");
	elTextEmail.classList.add("hidden");
	elTextPhone.classList.add("hidden");
}

// Event listener

elButtonReturn.addEventListener("click", function () {
	location.href = window.location.origin;
});

elButtonSave.addEventListener("click", function () {
	if (checkInput()) {
		location.href = window.location.origin;
	}
});

// Main

window.onload = () => {
	hideError();
};

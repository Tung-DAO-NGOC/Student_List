// Element

const elTBody = document.querySelector("tbody");

let users = [];

// API

function getListAPI() {
	return axios.get("/users");
}
async function getList() {
	try {
		const res = await getListAPI();
		users = res.data;
		console.log(users);
	} catch (error) {
		console.log(error);
	}
}

// Function

function clearBody() {
	elTBody.innerHTML = "";
}

// Main

window.onload = () => {
	clearBody();
};

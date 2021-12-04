// Element

const elTBody = document.querySelector("tbody");

// Global

// API

function getListAPI() {
	return axios.get("/users");
}
async function getList() {
	try {
		const res = await getListAPI();
		const userList = res.data;
		renderBody(userList);
	} catch (error) {
		console.log(error);
	}
}

// Function

function renderBody(list) {
	clearBody();

	if (list.length === 0) {
		elTBody.innerHTML = `<tr><td colspan="5"><div class="noUser">There is no user</tr>`;
		return;
	} else {
		list.sort((a, b) => -(a.id - b.id));

		list.forEach((user) => {
			elTBody.innerHTML += `
			<tr>
				<td>${user.name}</td>
				<td>${user.birthday}</td>
				<td>${user.email}</td>
				<td>${user.phone}</td>
				<td>
					<a href="/edit.html?id=${user.id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
					|
					<a class="text-danger" onclick="deleteUser(${user.id})"><i class="fa fa-trash-alt"></i> Xóa</a>
				</td>
			</tr>`;
		});
	}
}

function deleteUser(id) {
	console.log(`Deleting ${id}`);
}

function sort(arrayUser) {}

function clearBody() {
	elTBody.innerHTML = "";
}

// Main

window.onload = () => {
	getList();
};

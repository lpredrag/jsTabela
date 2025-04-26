let userCounter = 0;
const userList = [];
const userTable = document.getElementById("userTable");

const addUser = () => {
    const name = document.getElementById("nameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    if (!name || !phone) {
        return;
    }
    if (userList.some(user => user.phone === phone)) {
        alert("Korisnik već postoji!");
        return;
    }

    user = {name, phone};
    userList.push(user);

    const row = userTable.insertRow();
    const numCell = row.insertCell(0);
    const nameCell = row.insertCell(1);
    const phoneCell = row.insertCell(2);
    numCell.innerHTML = userCounter;
    nameCell.innerHTML = name;
    phoneCell.innerHTML = phone;
    userCounter++;
}
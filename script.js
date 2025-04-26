let userCounter = 0;
const userList = [];
const tableBody = document.getElementById("tableBody");

const addUser = () => {
    const firstName = document.getElementById("firstNameInput").value.trim();
    const lastName = document.getElementById("lastNameInput").value.trim();
    const phone = document.getElementById("phoneInput").value.trim();
    if (!firstName || !lastName || !phone) {
        return;
    }
    if (userList.some(user => user.phone === phone)) {
        alert("Korisnik već postoji!");
        return;
    }

    const user = {id: userCounter, firstName, lastName, phone};
    userList.push(user);

    tableBody.innerHTML = " ";
    userList.forEach(user => {
        const row = tableBody.insertRow();
        const numCell = row.insertCell(0);
        const firstNameCell = row.insertCell(1);
        const lastNameCell = row.insertCell(2)
        const phoneCell = row.insertCell(3);
        numCell.innerHTML = user.id;
        firstNameCell.innerHTML = user.firstName;
        lastNameCell.innerHTML = user.lastName;
        phoneCell.innerHTML = user.phone;
    });
    userCounter++;
}
function formValidation() {
    let nameInput = document.getElementById("name-input").value;

    console.log(nameInput);
    if (nameInput === "") {
        alert("Please enter your name");
        return false;
    }
    document.getElementById("result-form").innerHTML = nameInput;

    let birthdate = document.getElementById("birthdate-input").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let message = document.getElementById("message-input").value;

    let messageBox = document.getElementById("submit-input");
    messageBox.innerHTML = `
    Nama: ${nameInput}
    <br>
    Tanggal Lahir: ${birthdate}
    <br>
    Jenis Kelamin: ${gender}
    <br>
    Pesan: ${message}
    `;

    
}

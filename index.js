
let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let savaButton = document.getElementById("saveButton");

const generatePassword =(len) => {
    const lowerAlphabet ="abcdefghijklmnopqrstuvwxyz";
    const upperAlphabet ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeric ="0123456789";
    const symbol ="!@#$%^&*()_+=-{}[]:;<>,.~?/";

    const data =lowerAlphabet + upperAlphabet + numeric + symbol;
    
    let generator='';
    for (let index =0; index <len; index++){
        generator += data [Math.floor(Math.random() * data.length)];

    }
return generator
}

const getPassword =() => {
    const newPassword = generatePassword(passwordLength.value);
    password.value = newPassword;
    setTimeout(() => {
}, 1000);
}
const savePassword =() => {
document.title = password.value;
savaButton.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(`password saya: ${document.title}`));
saveButton.setAttribute('download','MyPasswordGeneratorLOG.txt');
setTimeout(() => {
    alert('password berhasil disimpan');
}, 1000);
}
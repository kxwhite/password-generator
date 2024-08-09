const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const charactersNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const charactersSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


let inputOneEl = document.getElementById("input1")
let inputTwoEl = document.getElementById("input2")

let lengthEl = document.getElementById("input-length")
let symbolEl = document.getElementById("input-symbol")
let numberEl = document.getElementById("input-number")

let errorEl = document.getElementById("error-msg")


function generate() {
    clearInputs()
    errorEl.textContent = ""
    let characterArray

    if (symbolEl.checked && numberEl.checked) {
        characterArray = [...characters]
    } else if (symbolEl.checked) {
        characterArray = [...charactersNumbers]
    } else if (numberEl.checked) {
        characterArray = [...charactersSymbols]
    } else {
        characterArray = [...allCharacters]
    }

    let passLength = lengthEl.value || 15

    if (passLength < 8 || passLength > 15) {
        errorEl.textContent = "Please enter a password between 8 and 15 characters long."
    } else {
        for (let i = 0; i < passLength; i++) {
            let randomNumber = Math.floor(Math.random() * characterArray.length)
            inputOneEl.value += characterArray[randomNumber]
        }

        for (let i = 0; i < passLength; i++) {
            let randomNumber = Math.floor(Math.random() * characterArray.length)
            inputTwoEl.value += characterArray[randomNumber]
        }
    }
}

function clearInputs() {
    inputOneEl.value = ""
    inputTwoEl.value = ""
}


function copyFirst() {

    if (inputOneEl.value != "" && inputOneEl.value != "") {
        inputOneEl.select()
        inputOneEl.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(inputOneEl.value)
        alert("Copied the text: " + inputOneEl.value)
    }

}

function copySecond() {

    if (inputOneEl.value != "" && inputOneEl.value != "") {
        inputTwoEl.select()
        inputTwoEl.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(inputTwoEl.value)
        alert("Copied the text: " + inputTwoEl.value)
    }

}

const randomCon = document.querySelector('div')
const input = document.querySelector('input')
const verifyBtn = document.querySelector('button')
const emoji = document.querySelector('.fa-solid')
let body = document.querySelector ('body')
let messageText = document.querySelector ('.text')


let theVal = "";

function initialize() {
    const randomVal = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    for(let i = 1; i <= 6; i++) {    
    theVal += randomVal.charAt(Math.floor(Math.random() * randomVal.length))
    }
    randomCon.textContent = theVal;                         
}

function verification() {
    let inputVal = input.value
    if (inputVal == theVal) {
        body.classList.remove('bg-danger')
        body.classList.add('bg-success')
        emoji.classList.remove('fa-face-meh')
        emoji.classList.remove('fa-face-frown')
        emoji.classList.add('fa-face-smile')
        messageText.textContent = "Success"
    } else {
        body.classList.remove('bg-success')
        body.classList.add('bg-danger')
        emoji.classList.remove('fa-face-meh')
        emoji.classList.remove('fa-face-smile')
        emoji.classList.add('fa-face-frown')
        messageText.textContent = "Fail"
    }
    input.value = ''
}

verifyBtn.addEventListener('click', verification)
initialize()

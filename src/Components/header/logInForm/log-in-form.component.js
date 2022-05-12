import "./log-in-form.scss"
import "../signUpForm/signUpForm.scss"
import { overlay } from "../signUpForm/signUpForm"


export const logInFormDiv = document.createElement("div")
logInFormDiv.classList = "log-in-form dezactivated"
logInFormDiv.tabIndex = 0

const titleLogIn = document.createElement("h3")
titleLogIn.classList = "title"
titleLogIn.innerHTML = "Log In"



const labelEmail = document.createElement("label")
labelEmail.classList = "label"
labelEmail.id = "labelEmail"
labelEmail.innerText = "Enter Email"

const emailInput = document.createElement("input")
emailInput.classList = "input email-input"

labelEmail.addEventListener("click", () => {
  emailInput.focus()
})

const labelPass = document.createElement("label")
labelPass.classList = "label"
labelPass.id = "labelPass"
labelPass.innerText = "Enter Password"

const passInput = document.createElement("input")
passInput.classList = "input pass-input"

labelPass.addEventListener("click", () => {
  passInput.focus()
})

const buttonSubbmitInput = document.createElement("button");
buttonSubbmitInput.classList = "btn-subbmit-input"
buttonSubbmitInput.innerText = "Log In"


logInFormDiv.appendChild(overlay)
logInFormDiv.appendChild(titleLogIn)
logInFormDiv.appendChild(labelEmail)
logInFormDiv.appendChild(emailInput)
logInFormDiv.appendChild(labelPass)
logInFormDiv.appendChild(passInput)
logInFormDiv.appendChild(buttonSubbmitInput)
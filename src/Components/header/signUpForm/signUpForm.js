import "./signUpForm.scss"
import "../logInForm/log-in-form.scss"

export const signUpFormDiv = document.createElement("div")
signUpFormDiv.classList = "sign-up-form-div dezactivated"

export const overlay = document.createElement("div")
overlay.classList = "overlay dezactivated"

const titleSignUp = document.createElement("h3")
titleSignUp.classList = "title"
titleSignUp.innerHTML = "Sign Up"

const labelName = document.createElement("label")
labelName.classList = "label"
labelName.id = "labelEmail"
labelName.innerText = "Enter Full Name"

const nameInput = document.createElement("input")
nameInput.classList = "input email-input"

labelName.addEventListener("click", () => {
  nameInput.focus()
})

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
buttonSubbmitInput.innerText = "Sign In"

const termsAndConditions = document.createElement("div")
termsAndConditions.innerHTML = "By continuing, you agree to ∞’s Terms of Service and acknowledge that you've read our Privacy Policy"
termsAndConditions.classList = "terms"

signUpFormDiv.appendChild(titleSignUp)
signUpFormDiv.appendChild(labelName)
signUpFormDiv.appendChild(nameInput)
signUpFormDiv.appendChild(labelEmail)
signUpFormDiv.appendChild(emailInput)
signUpFormDiv.appendChild(labelPass)
signUpFormDiv.appendChild(passInput)
signUpFormDiv.appendChild(buttonSubbmitInput)
signUpFormDiv.appendChild(termsAndConditions)
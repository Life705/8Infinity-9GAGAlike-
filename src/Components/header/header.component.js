import "./header.style.scss"
import img from "../../../Photo/NicePng_infinite-png_1140672.png"
import magGlass from "../../../Photo/clipart4779460.png"
import profileImgPhoto from "../../../Photo/kitty-cat-close-up-camryn-zee-photography.jpg"
import { logInFormDiv } from "../header/logInForm/log-in-form.component"
import { signUpFormDiv } from "../../Components/header/signUpForm/signUpForm"
import { overlay } from "../../Components/header/signUpForm/signUpForm"
import { uploudBtn } from "../../Components/header/uploud/uploud.component.js"
import { containerUploud } from "../../Components/header/uploud/uploud.component.js"

export const header = document.createElement("div");
header.classList = "header"

const logoImg = document.createElement("img")
logoImg.src = img
logoImg.classList = "img-logo"

const searchIcon = document.createElement("img")
searchIcon.src = magGlass
searchIcon.classList = "img-search"

searchIcon.addEventListener("click", () => {
  if (searchBar.classList.contains("dezactivated")) {
    searchBar.classList.remove("dezactivated")
    searchBar.focus()
  }
})

const signUpBtn = document.createElement("button")
signUpBtn.innerHTML = "Sign Up"
signUpBtn.classList = "sign-btn"

const logInBtn = document.createElement("button")
logInBtn.innerHTML = "Log In"
logInBtn.classList = "log-btn"

logInBtn.addEventListener("click", () => {
  if (logInFormDiv.classList.contains("dezactivated")) {
    logInFormDiv.classList.remove("dezactivated")
    overlay.classList.remove("dezactivated")

    if (!logInFormDiv.classList.contains("dezactivated")) {
      overlay.addEventListener("click", (e) => {
        if (!logInFormDiv.contains(e.target)) {
          logInFormDiv.classList.add("dezactivated")
          overlay.classList.add("dezactivated")
        }
      })
    }
  }
})

const profile = document.createElement("div")
const profileImg = document.createElement("img")
profileImg.src = profileImgPhoto
profile.classList = "profile dezactivated"
profileImg.classList = "profile-photo"
profile.appendChild(profileImg)



const searchBar = document.createElement("input")
searchBar.classList = "input-search dezactivated"
searchBar.addEventListener("blur", () => {
  searchBar.classList.add("dezactivated")

})

signUpBtn.addEventListener("click", () => {
  if (signUpFormDiv.classList.contains("dezactivated")) {
    signUpFormDiv.classList.remove("dezactivated")
    overlay.classList.remove("dezactivated")
    if (!signUpFormDiv.classList.contains("dezactivated")) {
      overlay.addEventListener("click", (e) => {
        if (!signUpFormDiv.contains(e.target)) {
          signUpFormDiv.classList.add("dezactivated")
          overlay.classList.add("dezactivated")
        }
      })
    }
  }
})

header.appendChild(overlay)
header.appendChild(signUpFormDiv)
header.appendChild(logInFormDiv)
header.appendChild(searchBar)
header.appendChild(logoImg)
header.appendChild(searchIcon)
header.appendChild(profile)
header.appendChild(logInBtn)
header.appendChild(signUpBtn)
header.appendChild(uploudBtn)
header.appendChild(containerUploud)

// header.innerText = ''
// header.innerHTML = '<p>ceva</p>'

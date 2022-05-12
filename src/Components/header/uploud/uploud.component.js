import "./uploud.style.scss"
import "../signUpForm/signUpForm.scss"
import { overlay } from "../signUpForm/signUpForm"


export const uploudBtn = document.createElement("button")
uploudBtn.classList = "sign-btn uploud"
uploudBtn.innerHTML = "+ Uploud"


export const containerUploud = document.createElement("div")
containerUploud.classList = "container-uploud off"

const arr = ["Funny", "Gamming", "Amazing", "Animals", "Random"]


const titleUplaud = document.createElement("h3")
titleUplaud.classList = "title-uploud"
titleUplaud.innerHTML = "Upload a Post"

const urlDiv = document.createElement("div")
urlDiv.classList = "url-div"

const postTitle = document.createElement("input")
postTitle.classList = "url-input"
postTitle.placeholder = "Give your post a title"
urlDiv.appendChild(postTitle)

const urlTextArea = document.createElement("input")
urlTextArea.classList = "url-input"
urlTextArea.placeholder = "Insert Img URL Here"
urlDiv.appendChild(urlTextArea)

const postBtn = document.createElement("button")
postBtn.classList = "post-btn"
postBtn.innerHTML = "Post Meme"


//Create List And Category Selection

const createCategorySelector = (text) => {
  const initialDivCategoryChose = document.createElement("div")
  initialDivCategoryChose.classList = "initial-category-text"
  initialDivCategoryChose.innerHTML = text
  containerUploud.appendChild(initialDivCategoryChose)

  initialDivCategoryChose.addEventListener("click", () => {
    initialDivCategoryChose.remove()

    const overlayCategorySelect = document.createElement("div")
    overlayCategorySelect.classList = "overlay-category off"
    containerUploud.appendChild(overlayCategorySelect)
    if (overlayCategorySelect.classList.contains("off")) {
      overlayCategorySelect.classList.remove("off")
    }

    const newContainer = document.createElement("div")
    newContainer.classList = "new-container"
    containerUploud.appendChild(newContainer)

    for (let i = 0; i < arr.length; i++) {
      const divCategory = document.createElement("div")

      divCategory.classList = "divCategory"
      const text = document.createElement("p")
      text.innerHTML = arr[i]
      text.classList = "text"
      divCategory.appendChild(text)

      const check = document.createElement("input")
      check.type = "checkbox"
      check.classList = "box-check"
      divCategory.appendChild(check)




      newContainer.appendChild(divCategory)
    }
    const okBtn = document.createElement("button")
    okBtn.classList = "ok"
    okBtn.innerHTML = "Ok"
    newContainer.appendChild(okBtn)

    const allCheckBox = document.querySelectorAll(".box-check")
    allCheckBox.forEach(x => x.addEventListener("click", (e) => {
      allCheckBox.forEach(x => x.checked = false)
      e.target.checked = true

      const textSelected = e.target.parentNode.querySelector(".text").innerHTML
      textSelected

      okBtn.addEventListener("click", () => {
        newContainer.remove()
        createCategorySelector(textSelected)
        overlayCategorySelect.classList.add("off")
      })
    }))
  })

}
createCategorySelector("Select Category")


containerUploud.appendChild(titleUplaud)
containerUploud.appendChild(urlDiv)
containerUploud.appendChild(postBtn)




uploudBtn.addEventListener("click", () => {
  if (overlay.classList.contains("dezactivated") &&
    containerUploud.classList.contains("off")) {
    overlay.classList.remove("dezactivated")
    containerUploud.classList.remove("off")

    if (!uploudBtn.classList.contains("dezactivated")) {
      overlay.addEventListener("click", (e) => {
        if (!uploudBtn.contains(e.target)) {

          overlay.classList.add("dezactivated")
          containerUploud.classList.add("off")
        }
      })
    }
  }

})




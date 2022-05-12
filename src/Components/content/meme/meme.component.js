import "./meme.style.scss"
import "../../content/content.component.js"
import pictureTest from "../../../../Photo/Obama-Laugh.jpg"
export const memeContainer = document.createElement("div")
memeContainer.classList = "container-meme"


const createContent = () => {
  const article = document.createElement("div")
  article.classList = "article"

  const categoryName = document.createElement("span")
  categoryName.innerHTML = "Funny"
  categoryName.classList = "span"

  const titleMeme = document.createElement("p")
  titleMeme.classList = "title"
  titleMeme.innerHTML = "Insert your tittle here"

  const img = document.createElement("img")
  img.classList = "img-meme"
  img.src = pictureTest

  const votes = document.createElement("div")
  votes.classList = "votes"


  const upvote = document.createElement("div")
  upvote.classList = "vote"
  let upvotesNumber = document.createElement("span")
  upvotesNumber.classList = "upvotesNumber"
  upvotesNumber.value = 0
  upvote.innerHTML = `↑ ${upvotesNumber.value}`

  const downvote = document.createElement("div")
  downvote.classList = "vote downvote"
  let downvoteNumber = document.createElement("span")
  downvoteNumber.classList = "downvoteNumber"
  downvoteNumber.value = 0
  downvote.innerHTML = `↓ ${downvoteNumber.value}`

  memeContainer.appendChild(article)
  article.appendChild(categoryName)
  article.appendChild(titleMeme)
  article.appendChild(img)

  article.appendChild(votes)
  votes.appendChild(upvote)
  votes.appendChild(downvote)

  upvote.addEventListener("click", () => {
    if (!upvote.classList.contains("voted")) {
      console.log(5)
      upvote.classList.add("voted")
      upvotesNumber.value = upvotesNumber.value + 1
      upvote.innerHTML = `↑ ${upvotesNumber.value}`

    }
    else {
      upvotesNumber.classList.remove("voted")
      upvotesNumber.value = upvotesNumber.value - 1
      upvote.innerHTML = `↑ ${upvotesNumber.value}`
      upvote.classList.remove("voted")
    }
  })

  downvote.addEventListener("click", () => {

    downvoteNumber.value = downvoteNumber.value + 1
    downvote.innerHTML = `↓ ${downvoteNumber.value}`
  })
}
createContent()






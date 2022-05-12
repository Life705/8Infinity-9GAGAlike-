import "./content.style.scss";
import { memeContainer } from "../content/meme/meme.component.js"
import funnyIMG from "../../../Photo/Obama-Laugh.jpg";
import gammingIMG from "../../../Photo/Ten-Best-Gamming-Blogs-Website-300x200.jpg";
import amazingIMG from "../../../Photo/amazed-face.png";
import animalIMG from "../../../Photo/kitty-cat-close-up-camryn-zee-photography.jpg";
import randomIMG from "../../../Photo/images.jpg";

export const overlayMemeContent = document.createElement("div");
overlayMemeContent.classList = "overlay-meme";



const funnyImagine = document.createElement("img")
funnyImagine.classList = "img-category"
funnyImagine.src = funnyIMG

const gammingImagine = document.createElement("img")
gammingImagine.classList = "img-category"
gammingImagine.src = gammingIMG

const amazingImagine = document.createElement("img")
amazingImagine.classList = "img-category"
amazingImagine.src = amazingIMG

const animalImagine = document.createElement("img")
animalImagine.classList = "img-category"
animalImagine.src = animalIMG

const randomImagine = document.createElement("img")
randomImagine.classList = "img-category"
randomImagine.src = randomIMG

const containerCat = document.createElement("div")
containerCat.classList = "container"

const categorySpan = document.createElement("span")
categorySpan.classList = "category-span"
categorySpan.innerHTML = "Categories"
containerCat.appendChild(categorySpan)

export const createCategory = (photo, cat, id) => {
  const categoryDiv = document.createElement("div")
  categoryDiv.classList = "category"
  categoryDiv.id = id

  const listCategory = document.createElement("li")
  listCategory.classList = "list"

  const imgCat = document.createElement("img")
  imgCat.src = photo.src
  imgCat.classList = "img-category"

  const spanNameCat = document.createElement("span")
  spanNameCat.innerHTML = cat
  spanNameCat.classList = "span"

  listCategory.appendChild(imgCat)
  listCategory.appendChild(spanNameCat)
  categoryDiv.appendChild(listCategory)
  containerCat.appendChild(categoryDiv)
}
const funnyDiv = document.getElementById("funny")
console.log(funnyDiv)

overlayMemeContent.appendChild(containerCat)
overlayMemeContent.appendChild(memeContainer)

createCategory(funnyImagine, "Funny", "funny")
createCategory(gammingImagine, "Gamming")
createCategory(amazingImagine, "Amazing")
createCategory(animalImagine, "Animals")
createCategory(randomImagine, "Random")


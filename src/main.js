import "./index.scss";

// import {`ce importezi`} from "./ de unde importezi"  
// export const "functia ce vrei exportata" 
//export const a = 10

import { header } from "./Components/header/header.component.js"
import { overlayMemeContent } from "./Components/content/content.component.js"

const root = document.querySelector('#root');
root.classList = "root"

root.appendChild(header)
root.appendChild(overlayMemeContent)
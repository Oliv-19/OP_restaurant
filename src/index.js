import './index.css'
import { DomElems } from "./homeScript";
import { menuDom } from "./menuScript";
import { contactDom } from "./contactScript";


let contentDiv = document.querySelector('#content')
contactDom(contentDiv)

let nav = document.querySelector('nav')

function changeTab(e){
    if(e.target.id == 'button'){
        contentDiv.textContent= ''
        if(e.target.className == 'home'){
            
            DomElems(contentDiv)
        } else if(e.target.className == 'menu'){
            
            menuDom(contentDiv)
        } else if(e.target.className == 'contact'){
            
            contactDom(contentDiv)
        }
    }
}

nav.addEventListener('click', (e) => {changeTab(e)})


console.log('what')
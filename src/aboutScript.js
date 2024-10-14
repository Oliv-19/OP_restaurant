import './about.css'
import {createDomElem} from './homeScript'

function aboutDom(contentDiv){
    
    let card = createDomElem('div','','card')
    let form = createDomElem('form','','form')
    let about = createDomElem('h1',"About Tom's",'about')

    card.appendChild(about)
    card.appendChild(form)
    contentDiv.appendChild(card)
}
export {aboutDom}
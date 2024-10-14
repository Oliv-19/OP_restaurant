import {createDomElem} from './homeScript'

function menuDom(contentDiv){
   
    let card = createDomElem('div','','card')

    let menutitle = createDomElem('h1','Menu','menuTitle')
    let foodName = createDomElem('h1','Pizza','foodName')
   
    card.appendChild(foodName)
    contentDiv.appendChild(menutitle)
    contentDiv.appendChild(card)
    
}
export {menuDom}
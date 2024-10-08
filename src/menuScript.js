function menuDom(contentDiv){
   
    let card = document.createElement('div')

    let menutitle = document.createElement('h1')
    let foodName = document.createElement('h1')
    menutitle.textContent='Menu'
    foodName.textContent='Pizza'

    card.appendChild(foodName)
    contentDiv.appendChild(menutitle)
    contentDiv.appendChild(card)
    
}
export {menuDom}
import './menu.css'
import {createDomElem} from './homeScript'



class food{
    constructor(name, img, price){
        this.name= name
        this.img= img
        this.price= price
        
    }
    createCard(wrapper){
        let card = createDomElem('div','','item')
        let text =createDomElem('div','','text')
        let foodName = createDomElem('h1',this.name, 'foodName')
        let img= createDomElem('img', this.img, 'foodImg')
        let price= createDomElem('h3', this.price,'price')
        card.appendChild(img)
        text.appendChild(foodName)
        text.appendChild(price)
        card.appendChild(text)
        wrapper.appendChild(card)
        return card
    }

}

function menuDom(contentDiv){
    let dishes = {
        pizza : new food('Pizza', 'https://images.contentstack.io/v3/assets/bltbb619fd5c667ba2d/blt932e185481982289/6675970b4b8d729a850917a1/Pizza-LP-24-Pepperoni_Copy-1.png' ,5),
        pasta : new food('Pasta', 'https://png.pngtree.com/png-vector/20240626/ourmid/pngtree-pasta-bolognese-with-basil-on-a-plate-png-image_12860139.png' ,2.5),
        burguer : new food('Burguer', 'https://bubbafoods.com/wp-content/uploads/2023/10/family-burger-beef-recipes.png' ,3),
        tacos : new food('Tacos', 'https://static.vecteezy.com/system/resources/previews/032/424/350/non_2x/fresh-pair-of-meat-and-vegetable-tacos-ai-generative-free-png.png' ,2),
        chicken : new food('Fried Chicken', 'https://www.crimsoncoward.com/wp-content/uploads/2023/10/3Chicken-Tenders.png' ,3),
    }
    let wrapper = createDomElem('div','','wrapper') 

    for(let dish in dishes){
        
        dishes[dish].createCard(wrapper)
    }
    contentDiv.appendChild(wrapper)
}
export {menuDom}
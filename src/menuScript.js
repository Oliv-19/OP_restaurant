import './menu.css'
import {CreateDomElem} from './homeScript'
import {events} from './pubSub'



class food{
    constructor(name, img, price){
        this.name= name
        this.img= img
        this.price= price
        this.elems={
            item : ['div',''],
            text :['div',''],
            foodName : ['h1',this.name],
            foodImg: ['img', this.img],
            price: ['h3', '$'+this.price],
            buy: ['button', '+'],
        }
        
    }
    createCard(wrapper){
        CreateDomElem.createElemsFromObj(this.elems)

        this.elems.item.appendChild(this.elems.foodImg)
        this.elems.text.appendChild(this.elems.foodName)
        this.elems.text.appendChild(this.elems.price)
        this.elems.price.appendChild(this.elems.buy)
        this.elems.item.appendChild(this.elems.text)
        wrapper.appendChild(this.elems.item)
        return this.elems.item
    }
    pub(){
        
        events.publish('addToCart', this)
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
    let wrapper = new CreateDomElem('div','','wrapper') 
    for(let dish in dishes){
        
        dishes[dish].createCard(wrapper)
        dishes[dish].elems.buy.addEventListener('click',()=> dishes[dish].pub())
    }
    
    contentDiv.appendChild(wrapper)
}
export {menuDom}
import './cart.css'
import {CreateDomElem} from './homeScript'
import {events} from './pubSub'


class Cart{
    static cartOrders= []
    static addToCart(dish){
        Cart.cartOrders.push(dish)
    }
    static order(elems){
        elems.divDialog.textContent = ''
        elems.cartTitle.textContent ='Order Completed'

        Cart.cartOrders = []

        elems.cartTitle.appendChild(elems.closeBtn)
        elems.divDialog.appendChild(elems.cartTitle)
    }
    static listeners(elems){
        elems.closeBtn.addEventListener('click', ()=> elems.modal.close())
        elems.orderBtn.addEventListener('click', ()=> this.order(elems))
    }
    static getTotalPrice(){
        let total = 0
        Cart.cartOrders.forEach(item=>{
            total += item.price
        })
        return total
    }
    static delOrder(e, totalPrice, itemCount){
        let arrayElem = Cart.cartOrders.findIndex(item => item.name == e.target.parentElement.className)

        if(arrayElem != -1){
            Cart.cartOrders.splice(arrayElem, 1)
            totalPrice.textContent = 'Total: $'+ this.getTotalPrice()
            itemCount.textContent = itemCount.textContent- 1

            if(itemCount.textContent <= 0){
                e.target.parentElement.remove()
            }
        }
    }
    
}

events.subscribe('addToCart', Cart.addToCart)

function cartItemsDom(elems) {
    let uniqueItems = new Set();

    Cart.cartOrders.forEach(item => {
        if (!uniqueItems.has(item.name)) {
            uniqueItems.add(item.name);
            let count = Cart.cartOrders.filter(v => (v === item)).length;
            let cartElem = {
                itemName: ['h1', item.name],
                itemCount: ['h1', count],
                itemPrice: ['h1', '$'+item.price],
                itemDel: ['button', '-'],
            };
            let divItem = new CreateDomElem('div', '', 'divItem', item.name)
            CreateDomElem.createElemsFromObj(cartElem);

            for(let elem in cartElem){
                divItem.appendChild(cartElem[elem]);
            }
            elems.cartItems.appendChild(divItem);
            
            cartElem.itemDel.addEventListener('click',(e)=> {Cart.delOrder(e, elems.totalPrice, cartElem.itemCount)})
        }
    });
}
function cartDom(contentDiv){

    let elems={
        modal : ['dialog',''],
        divDialog : ['div',''],
        cartTitle : ['h1','Cart'],
        closeBtn : ['button','X'],
        cartItems : ['div',''],
        orderDiv : ['div',''],
        totalPrice : ['h1','Total: $'+ Cart.getTotalPrice() ],
        orderBtn : ['button','Complete order'],

        divTitle: ['div', ''],
        itemTitle: ['h1', 'Food Name'],
        itemAmount: ['h1', 'Quantity'],
        itemPriceTitle: ['h1', 'Price'],

    }
    CreateDomElem.createElemsFromObj(elems)

    Cart.listeners(elems)
    cartItemsDom(elems)
    
    elems.cartTitle.appendChild(elems.closeBtn)
    elems.divDialog.appendChild(elems.cartTitle)
    
    elems.divTitle.appendChild(elems.itemTitle);
    elems.divTitle.appendChild(elems.itemAmount);
    elems.divTitle.appendChild(elems.itemPriceTitle);
    elems.cartItems.prepend(elems.divTitle);
    
    elems.divDialog.appendChild(elems.cartItems)
    elems.orderDiv.appendChild(elems.totalPrice)
    elems.orderDiv.appendChild(elems.orderBtn)
    elems.divDialog.appendChild(elems.orderDiv)

    elems.modal.appendChild(elems.divDialog)
    contentDiv.appendChild(elems.modal)

    elems.modal.showModal()
}

export {cartDom}
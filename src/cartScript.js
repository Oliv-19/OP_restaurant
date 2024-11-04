import './cart.css'
import {CreateDomElem} from './homeScript'
import {events} from './pubSub'

events.subscribe('addToCart', addToCart)
let cartOrders = []

function order(elems){
    elems.divDialog.textContent = ''
    elems.cartTitle.textContent ='Order Completed'

    cartOrders = []

    elems.cartTitle.appendChild(elems.closeBtn)
    elems.divDialog.appendChild(elems.cartTitle)
}

function listeners(elems){
    elems.closeBtn.addEventListener('click', ()=> elems.modal.close())
    elems.orderBtn.addEventListener('click', ()=> order(elems))
}

function addToCart(dish){
    cartOrders.push(dish)
}


function getTotalPrice(){
    let total = 0
    cartOrders.forEach(item=>{
        total += item.price
    })
    return total
}

function delOrder(e, totalPrice, itemCount){

    let arrayElem = cartOrders.findIndex(item => item.name == e.target.parentElement.className)

    if(arrayElem != -1){
        cartOrders.splice(arrayElem, 1)
        totalPrice.textContent = 'Total: $'+ getTotalPrice()
        itemCount.textContent = itemCount.textContent- 1

        
        if(itemCount.textContent <= 0){
            e.target.parentElement.remove()
        }
    }
}

function cartItemsDom(elems) {
    let uniqueItems = new Set();

    cartOrders.forEach(item => {
        if (!uniqueItems.has(item.name)) {

            uniqueItems.add(item.name);
            let count = cartOrders.filter(v => (v === item)).length;
            let cartElem = {
                divItem: ['div', ''],
                itemName: ['h1', item.name],
                itemCount: ['h1', count],
                itemPrice: ['h1', '$'+item.price],
                itemDel: ['button', '-'],
            };
            CreateDomElem.createElemsFromObj(cartElem);

            cartElem.divItem.className = item.name

            cartElem.divItem.appendChild(cartElem.itemName);
            cartElem.divItem.appendChild(cartElem.itemCount);
            cartElem.divItem.appendChild(cartElem.itemPrice);
            cartElem.divItem.appendChild(cartElem.itemDel);
            elems.cartItems.appendChild(cartElem.divItem);

            cartElem.itemDel.addEventListener('click',(e)=> {delOrder(e, elems.totalPrice, cartElem.itemCount)})
        }
    });


}
function cartDom(contentDiv){
    console.log('cart')
    let elems={
        modal : ['dialog',''],
        divDialog : ['div',''],
        cartTitle : ['h1','Cart'],
        closeBtn : ['button','X'],
        cartItems : ['div',''],
        orderDiv : ['div',''],
        totalPrice : ['h1','Total: $'+ getTotalPrice() ],
        orderBtn : ['button','Complete order'],

        divTitle: ['div', ''],
        itemTitle: ['h1', 'Food Name'],
        itemAmount: ['h1', 'Quantity'],
        itemPriceTitle: ['h1', 'Price'],

    }
    CreateDomElem.createElemsFromObj(elems)

    listeners(elems)

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
    // wrapper.appendChild(elems.modal)
    contentDiv.appendChild(elems.modal)



    elems.modal.showModal()
}

export {cartDom}
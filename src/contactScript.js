import './contact.css'
import {createDomElem} from './homeScript'

function contactDom(contentDiv){
    let content = createDomElem('div','','bg')
    
    let card = createDomElem('div','','card')
    let form = createDomElem('form','','form')
    let contactUS = createDomElem('h1',"Contact us",'contactUS')

    let contact={
        phoneNumber: createDomElem('p', '📞 123-456-789', 'number'),
        email: createDomElem('p', '✉️ contact@Tomsrestaurant.com', 'mail'),
        location: createDomElem('p', ' 📍 Nowhere', 'location'),
    }

    let formItems = {
        inputName: createDomElem('input', '', 'name'),
        inputEmail: createDomElem('input', '', 'email'),
        textBox: createDomElem('textarea', '', 'text'),
    }

    formItems.inputName.placeholder ='Name'
    formItems.inputEmail.placeholder ='Email'
    formItems.textBox.placeholder ='Text...'
    formItems.textBox.cols ='55'
    formItems.textBox.rows ='5'

    form.appendChild(formItems.inputName)
    form.appendChild(formItems.inputEmail)
    form.appendChild(formItems.textBox)

    card.appendChild(contactUS)
    card.appendChild(contact.phoneNumber)
    card.appendChild(contact.email)
    card.appendChild(contact.location)

    card.appendChild(form)
    content.appendChild(card)
    contentDiv.appendChild(content)
}
export {contactDom}
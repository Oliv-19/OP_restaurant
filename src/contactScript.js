import './contact.css'
import {CreateDomElem} from './homeScript'

function contactDom(contentDiv){

    let elems ={
        bg:['div',''],
        card:['div',''],
        form:['form',''],
        contactUS:['h1','Contact us'],
        number: ['p', '📞 123-456-789'],
        mail:['p', '✉️ contact@Tomsrestaurant.com'],
        location:['p', ' 📍 Nowhere'],
        name:['input', ''],
        email:['input', '',],
        textBox:['textarea', ''],
        submit:['button', 'Send'],
    }

    CreateDomElem.createElemsFromObj(elems)

    elems.name.placeholder ='Name'
    elems.email.placeholder ='Email'
    elems.textBox.placeholder ='Text...'
    elems.textBox.cols ='55'
    elems.textBox.rows ='5'
    elems.submit.type= 'submit'

    elems.form.appendChild(elems.name)
    elems.form.appendChild(elems.email)
    elems.form.appendChild(elems.textBox)
    elems.form.appendChild(elems.submit)

    elems.card.appendChild(elems.contactUS)
    elems.card.appendChild(elems.number)
    elems.card.appendChild(elems.mail)
    elems.card.appendChild(elems.location)

    elems.card.appendChild(elems.form)
    elems.bg.appendChild(elems.card)
    contentDiv.appendChild(elems.bg)
}
export {contactDom}
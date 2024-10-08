function aboutDom(contentDiv){
    
    let card = document.createElement('div')
    let form = document.createElement('form')
    

    let about = document.createElement('h1')
    about.textContent="About Tom's"

    card.appendChild(about)
    card.appendChild(form)
    contentDiv.appendChild(card)
}
export {aboutDom}
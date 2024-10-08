

function DomElems(contentDiv){
    
    let h1 = document.createElement('h1')
    let img = document.createElement('img')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')

    let pText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    h1.textContent="Tom's restaurant"
    img.src='https://mystickermania.com/cdn/stickers/tom-and-jerry/tom-jerry-tom-eating-burger-512x512.png'
    h3.textContent='Welcome'
    p.textContent= pText

    contentDiv.appendChild(h1)
    contentDiv.appendChild(img)
    contentDiv.appendChild(h3)
    contentDiv.appendChild(p)
}

export {DomElems}


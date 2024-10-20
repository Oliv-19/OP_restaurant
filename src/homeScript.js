import './home.css'

function createDomElem(tagName, value, id='', classId=''){
    let elem= document.createElement(tagName)
    
    elem.className = classId 
    elem.id = id
    if(tagName == 'img'){
      elem.src = value
    } else {
      elem.textContent= value
    }
    return elem
}

function DomElems(contentDiv){ 
    let imgSrc='https://mystickermania.com/cdn/stickers/tom-and-jerry/tom-jerry-tom-eating-burger-512x512.png'
    let pText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


    let title = createDomElem('div', " ", 'title')
    let info = createDomElem('div', " ", 'info')
    let h1 = createDomElem('h1', "Tom's restaurant", 'h1')
    let imgWrapper = createDomElem('div', ' ', 'imgWrapper')
    let img = createDomElem('img', imgSrc, 'img')
    let h3 = createDomElem('h3', 'Welcome', 'h3')
    let p = createDomElem('p', pText, 'p')
    
    title.appendChild(h1)
    imgWrapper.appendChild(img)
    title.appendChild(imgWrapper)
    contentDiv.appendChild(title)

    info.appendChild(h3)
    info.appendChild(p)
    contentDiv.appendChild(info)
}

export {DomElems, createDomElem}


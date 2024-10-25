import './home.css'

class CreateDomElem{
  constructor(tagName, value, id='', classId=''){
    this.elem= document.createElement(tagName)
    
    this.elem.className = classId 
    this.elem.id = id
    if(tagName == 'img'){
      this.elem.src = value
    } else {
      this.elem.textContent= value
    }
    return this.elem
  }
  static createElemsFromObj(object){
    for(let elem in object){
      let tag = object[elem][0]
      let content = object[elem][1]
      let id = elem
      object[elem] = new CreateDomElem(tag, content, id)
    }
  }
    
}

function DomElems(contentDiv){ 
    let imgSrc='https://mystickermania.com/cdn/stickers/tom-and-jerry/tom-jerry-tom-eating-burger-512x512.png'
    let pText='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    let elems = {
      title: ['div', ''],
      info: ['div', ''],
      h1: ['h1', "Tom's restaurant"],
      imgWrapper : ['div', ' '],
      img : ['img', imgSrc],
      h3 :['h3', 'Welcome'],
      p : ['p', pText],
    }
    CreateDomElem.createElemsFromObj(elems)

    elems.title.appendChild(elems.h1)
    elems.imgWrapper.appendChild(elems.img)
    elems.title.appendChild(elems.imgWrapper)
    contentDiv.appendChild(elems.title)

    elems.info.appendChild(elems.h3)
    elems.info.appendChild(elems.p)
    contentDiv.appendChild(elems.info)
}

export {DomElems, CreateDomElem}


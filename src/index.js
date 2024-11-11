import './index.css'
import { DomElems } from "./homeScript";
import { menuDom } from "./menuScript";
import { contactDom } from "./contactScript";
import { cartDom } from "./cartScript";

(function(){
    let tabs ={
        contentDiv : document.querySelector('#content'),
        nav : document.querySelector('nav'),
        changeTab:function(e){
            if(e.target.id == 'button'){
                if(e.target.className == 'home'){
                    this.contentDiv.textContent= ''
                    DomElems(this.contentDiv)
                } else if(e.target.className == 'menu'){
                    this.contentDiv.textContent= ''
                    menuDom(this.contentDiv)
                } else if(e.target.className == 'contact'){
                    this.contentDiv.textContent= ''
                    contactDom(this.contentDiv)
                } else if(e.target.className == 'cart'){
                    cartDom(this.contentDiv)
                }
            }
        },
        init:function(){
            DomElems(this.contentDiv)
            this.nav.addEventListener('click', (e) => {this.changeTab(e)})
        }
    }
    
    return tabs.init()
}())


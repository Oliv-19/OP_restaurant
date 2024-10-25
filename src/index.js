import './index.css'
import { DomElems } from "./homeScript";
import { menuDom } from "./menuScript";
import { contactDom } from "./contactScript";

(function(){
    let tabs ={
        contentDiv : document.querySelector('#content'),
        nav : document.querySelector('nav'),
        changeTab:function(e){
            if(e.target.id == 'button'){
                this.contentDiv.textContent= ''
                if(e.target.className == 'home'){
                    
                    DomElems(this.contentDiv)
                } else if(e.target.className == 'menu'){
                    
                    menuDom(this.contentDiv)
                } else if(e.target.className == 'contact'){
                    
                    contactDom(this.contentDiv)
                }
            }
        },
        init:function(){
            contactDom(this.contentDiv)
            this.nav.addEventListener('click', (e) => {this.changeTab(e)})
        }
    }
    
    return tabs.init()
}())


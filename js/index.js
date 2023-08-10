'use strict'
  

const header = {
    $: {
        document: document.documentElement,
        height: document.documentElement.scrollHeight,
        header: document.querySelector("header"),
        menubar: document.querySelector(".menu"),
        icon: document.querySelector("#checkbox"),
        nav: document.querySelector("header>div:last-child .nav"),
        subNav: document.querySelector('.nav>ul>li:nth-child(2)'),
        mediaQUery: window.matchMedia("(max-width:900px)")
    },
    headerScroll () {
        this.$.header.transition = `all 300ms ease-in-out`
        document.addEventListener("scroll", ()=>{
            if (header.$.document.scrollTop > 20) {
                this.$.header.classList.add("active")
            } else {
                this.$.header.classList.remove("active");
            }
        })
    },
    toggleMenu () {
        this.$.menubar.addEventListener("click", ()=>{
            if (this.$.icon.checked === true) {
                this.$.nav.classList.add("active")
            }
            else {
                this.$.nav.classList.remove("active")
                this.$.subNav.classList.remove("active")
            }
        })
    },
    smallPhoneToggle(event) {
        if (event.matches) {
            this.$.subNav.addEventListener("click", (e)=>{
                e.preventDefault()
                if (!this.$.subNav.classList.contains("active")) {
                    this.$.subNav.classList.add("active")
                }
                else {
                    this.$.subNav.classList.remove("active")
                }
            })
        }
        else return
    }
}

const onFocus = {
    $: {
        apply: document.querySelector(".apply"),
        name: document.querySelector("#name"),
    },
    moveTo(){
        this.$.apply.addEventListener("click", (e) => {
            e.preventDefault()
            this.$.name.focus()
        })
    }
}

const description = {
    $: {
        container: Array.from(document.querySelectorAll(".intro>div>div")),
        items: Array.from(document.querySelectorAll(".intro>div>div>p")),
        mediaQUery: window.matchMedia("(max-width:700px)")
    },
    showMore(event) {
        if (event.matches) {
            this.$.items.forEach((items, index) => {
                let half = items.textContent.substring(0, 260).concat(' ...READ MORE')
                let full = items.textContent.substring(0)
                items.textContent = half;
                
                items.addEventListener("click", ()=> {
                    console.log('working')
                    const isActive = items.classList.toggle("active");
                    console.log(isActive);
                    items.textContent = isActive ? full : half;
                    items.parentElement.classList.toggle("active", isActive);
                    this.$.container[index].style.height = isActive ? `${this.$.container[index].scrollHeight}px` : '210px';
                    // remove();
                })

                // function remove() {
                //     Array.from(description.$.items).forEach((item, id) => {
                //         if (id !== index && item.classList.contains("active")) {
                //             const isActive = item.classList.toggle("active");
                //             item.classList.remove("active");
                //             item.textContent = isActive ? full : half;
                //             description.$.container[id].style.height = '210px';
                //         }
                //     });
                // }
            })
        }
        else return
    }
}

const copyRight = {
    $: {
        yearEl: document.querySelector(".year")
    },
    getYear() {
        let time = new Date()
        this.$.yearEl.textContent = time.getFullYear()
    }
}




document.addEventListener("DOMContentLoaded", ()=>{
    header.headerScroll()
    header.toggleMenu()
    header.$.mediaQUery.addEventListener('',header.smallPhoneToggle(header.$.mediaQUery))
    description.$.mediaQUery.addEventListener('', description.showMore(description.$.mediaQUery))
    copyRight.getYear()
    onFocus.moveTo()
});
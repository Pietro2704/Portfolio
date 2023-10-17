class Hamburger{
  // https://www.youtube.com/watch?v=bHRXRYTppHM&t=57s

  constructor(Menu,NavList,NavLinks){
    this.Menu = document.querySelector(Menu)
    this.NavList = document.querySelector(NavList)
    this.NavLinks = document.querySelectorAll(NavLinks)
    this.activeClass = "active"

    this.Activate = this.Activate.bind(this)
  }

  animateLinks(){
    this.NavLinks.forEach((link,index) => {
      link.style.animation ? (link.style.animation = "") : (link.style.animation = `NavLinkFade .5s forwards ${index / 7 + .3}s`)
    })
  }

  Activate(){
    this.NavList.classList.contains(this.activeClass) ? this.NavList.classList.remove(this.activeClass) : 
    this.NavList.classList.add(this.activeClass);

    this.Menu.classList.contains(this.activeClass) ? this.Menu.classList.remove(this.activeClass) : 
    this.Menu.classList.add(this.activeClass);


    this.animateLinks();
  }

  addClickEvent() {
    if (this.Menu) {
      this.Menu.addEventListener('click', this.Activate);
    }
  }

  init() {
    this.addClickEvent();
    return this;
  }


}


const mobileNav = new Hamburger(
  ".hamburger",
  ".nav-list",
  ".nav-list li"
);

mobileNav.init();
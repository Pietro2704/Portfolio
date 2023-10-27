class Hamburger {

  constructor(menuSelector, navListSelector, navLinksSelector) {
    this.Menu = document.querySelector(menuSelector);
    this.NavList = document.querySelector(navListSelector);
    this.NavLinks = document.querySelectorAll(navLinksSelector);

    this.activeClass = "active";
    this.Activate = this.Activate.bind(this);
  }

  animateLinks() {
    if (this.NavList.classList.contains(this.activeClass)) {

      this.NavLinks.forEach((link, index) => {
        link.style.animation = `NavLinkFade .5s forwards ${index / 7 + 0.3}s`;
      });

    }
  }

  Activate() {
    if (this.Menu.classList.contains(this.activeClass)) {

      this.Menu.classList.remove(this.activeClass);
      this.NavList.classList.remove(this.activeClass);

      this.NavLinks.forEach((link) => {
        link.style.animation = "";
      });

    } else {

      this.Menu.classList.add(this.activeClass);
      this.NavList.classList.add(this.activeClass);
      this.animateLinks();

    }
  }

  addClickEvent() {
    if (this.Menu) {
      this.Menu.addEventListener('click', this.Activate);
    }

    this.NavLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.Activate();
      });
    });
    
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

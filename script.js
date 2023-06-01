//TAB para navegação entre imagem e texto

function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabMenu li");
  const tabContent = document.querySelectorAll(".js-tabContent section");
  const activeClass = "ativo";

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("activeClass");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("activeClass");
      });
      tabContent[index].classList.add("activeClass");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

//Accordion List para o FAQ

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add("activeClass");
    accordionList[0].nextElementSibling.classList.add("activeClass");

    function activeAccordion(event) {
      this.classList.toggle("activeClass");
      this.nextElementSibling.classList.toggle("activeClass");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordion();

//Scroll page/ link interno

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
   /* const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });*/

    section.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });

  }

  linksInternos.forEach((link) => {
    link.addEventListener("Click", scrollToSection);
  });
}

initScrollSuave();

//Animação Scroll//

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;

        if (isSectionVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

const scroll = () => {
  seamless.polyfill();

  const links = document.querySelectorAll(".header-menu__item a");
  const linkCharacteristics = document.querySelector(".card-details__link-characteristics");

  const allLinks = [...links, linkCharacteristics];

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        seamless.elementScrollIntoView(section, {
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
};

scroll();

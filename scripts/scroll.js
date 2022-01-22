const scroll = () => {
  seamless.polyfill();

  const links = document.querySelectorAll(".header-menu__item a");
  const details = document.querySelector(".card-details__link-characteristics");

  const allLinks = [...links, details];

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

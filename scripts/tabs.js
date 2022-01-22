const tabs = () => {
  const tabs = document.querySelectorAll(".card-detail__change");
  const tabsTitle = document.querySelector(".card-details__title");
  const tabsPrice = document.querySelector(".card-details__price");
  const tabsImage = document.querySelector(".card__image_item");

  const tabsOptions = [
    {
      name: "Graphite",
      memory: "128",
      price: 60000,
      image: "img/iPhone-graphite.webp",
    },
    {
      name: "Silver",
      memory: "256",
      price: 75000,
      image: "img/iPhone-silver.webp",
    },
    {
      name: "Sierra Blue",
      memory: "512",
      price: 99000,
      image: "img/iPhone-sierra_blue.webp",
    },
  ];

  const changeContent = (indexTab) => {
    const newTitle = `Смартфон Apple iPhone 13 Pro ${tabsOptions[indexTab].memory}GB ${tabsOptions[indexTab].name}`;
    tabsTitle.textContent = newTitle;
    document.title = newTitle;
    tabsPrice.textContent = `${tabsOptions[indexTab].price}₽`;

    tabsImage.setAttribute("src", tabsOptions[indexTab].image);
  };

  const changeActiveTabs = (indexClickedTab) => {
    tabs.forEach((tab, index) => {
      if (index === indexClickedTab) {
        tab.classList.add("active");
      } else {
        tab.classList.remove("active");
      }
    });
    changeContent(indexClickedTab);
  };

  changeActiveTabs(0);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      changeActiveTabs(index);
    });
  });
};

tabs();

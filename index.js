

  document.querySelector(".burger-icon").addEventListener("click", () => {
    document.querySelector(".navbar-menu").classList.toggle("is-visible");
    document.querySelector("header").classList.toggle("is-active");
  });
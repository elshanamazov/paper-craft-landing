export function burgerMenu() {
  const burger = document.querySelector(".burger__line");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("burger__line--active");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("burger__line--active");
      body.classList.remove("locked");
    }
  });
  // resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("burger__line--active");
      body.classList.remove("locked");
    }
  });
}
